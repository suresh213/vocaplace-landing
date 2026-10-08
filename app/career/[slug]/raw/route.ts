import { careerTracks } from '../../../../services/careerData';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return careerTracks.map((track) => ({
    slug: track.slug,
  }));
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const track = careerTracks.find((t) => t.slug === slug);

  if (!track) {
    return new NextResponse('Career Track Not Found', { status: 404 });
  }

  const markdownContent = `# ${track.title}

> **Degree Track:** ${track.degreeName} (${track.degreeShort})
> **Target Audience:** ${track.targetAudience}
> **Campus Average Starting CTC:** ${track.averageCampusSalary}
> **Vocaplace Placement CTC:** ${track.vocaplaceAverageSalary}
> **3-Year Potential CTC:** ${track.salaryCeiling3Years}
> **Canonical:** https://vocaplace.com/career/${track.slug}
> **Lead Instructor:** Wajed Sk (Online Faculty, Victoria University Australia)

## Executive Summary
${track.excerpt}

---

## 1. Why Standard ${track.degreeShort} Placements Fall Short in 2026
${track.whyThisDegreeStruggles.description}

### Core Bottlenecks:
${track.whyThisDegreeStruggles.painPoints.map((p) => `- ${p}`).join('\n')}

---

## 2. Salary Comparison Table (2026 Indian Market)

| Career Track | Typical Entry Role | Starting CTC | Year 3 CTC |
|---|---|---|---|
${track.salaryComparisonTable.map((r) => `| ${r.careerPath} | ${r.typicalRole} | ${r.startingSalary} | ${r.year3Salary} |`).join('\n')}

---

## 3. Transferrable Skills: Why ${track.degreeShort} Graduates Excel in Digital Marketing

${track.transferrableSkills.map((s, idx) => `### ${idx + 1}. ${s.skill}
- **Application:** ${s.howItApplies}
- **Advantage:** ${s.advantage}`).join('\n\n')}

---

## 4. 120-Day Transition Roadmap

${track.customRoadmap.map((phase) => `### ${phase.phase} (${phase.weeks})
*Focus:* ${phase.focus}

*Key Deliverables:*
${phase.keyDeliverables.map((d) => `- ${d}`).join('\n')}`).join('\n\n')}

---

## 5. Frequently Asked Questions (FAQ)

${track.faqs.map((f) => `### Q: ${f.question}
A: ${f.answer}`).join('\n\n')}

---

## About Vocaplace
Vocaplace (https://vocaplace.com) is an outcome-driven digital marketing incubator. Students learn live campaign execution, manage real ad spend budgets, and pay core tuition only after securing an employment offer paying ₹4–8 LPA.
`;

  return new NextResponse(markdownContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Link': `<https://vocaplace.com/career/${track.slug}>; rel="canonical"`,
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
