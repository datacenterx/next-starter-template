import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { page: string; referrer?: string; userAgent?: string };
    const { page, referrer, userAgent } = body;

    const pageView = await prisma.pageView.create({
      data: {
        page,
        referrer: referrer || null,
        userAgent: userAgent || null,
        ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || null,
      },
    });

    return NextResponse.json({ success: true, id: pageView.id });
  } catch (error) {
    console.error('Page view tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track page view' },
      { status: 500 }
    );
  }
}

// Get analytics data
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const days = parseInt(searchParams.get('days') || '7');

    const since = new Date();
    since.setDate(since.getDate() - days);

    const pageViews = await prisma.pageView.findMany({
      where: {
        createdAt: {
          gte: since,
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Group by page
    const pageStats = pageViews.reduce((acc: Record<string, number>, view) => {
      if (!acc[view.page]) {
        acc[view.page] = 0;
      }
      acc[view.page]++;
      return acc;
    }, {} as Record<string, number>);

    return NextResponse.json({
      totalViews: pageViews.length,
      pageStats,
      recentViews: pageViews.slice(0, 100),
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
