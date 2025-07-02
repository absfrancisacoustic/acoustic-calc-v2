// Acoustic Connect ROI Calculator: John Pye & Sons
'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function ROICalculator() {
  const [traffic, setTraffic] = useState(758800);
  const [conversionRate, setConversionRate] = useState(18.14); // base CVR of engaged traffic
  const [uplift, setUplift] = useState(10); // default uplift %
  const [aov, setAOV] = useState(34.15); // average order value

  const engagedTraffic = Math.round(traffic * 0.5958); // 1 - bounce rate 40.42%
  const baseConversions = Math.round(engagedTraffic * (conversionRate / 100));
  const baseRevenue = Math.round(baseConversions * aov);

  const upliftedConversions = Math.round(baseConversions * (uplift / 100));
  const upliftedRevenue = Math.round(upliftedConversions * aov);
  const totalRevenue = baseRevenue + upliftedRevenue;
  const annualUplift = upliftedRevenue * 12;
  const annualTotalRevenue = totalRevenue * 12;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Acoustic Connect ROI: John Pye & Sons</h1>

      <Card className="mb-6">
        <CardContent className="grid gap-4 pt-6">
          <div>
            <label className="font-medium">Monthly Website Visits</label>
            <Input
              type="number"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="font-medium">Base Conversion Rate (% of engaged traffic)</label>
            <Input
              type="number"
              step="0.01"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="font-medium">Average Order Value (£)</label>
            <Input
              type="number"
              step="0.01"
              value={aov}
              onChange={(e) => setAOV(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="font-medium">Conversion Uplift (%)</label>
            <Slider
              min={5}
              max={25}
              step={1}
              value={[uplift]}
              onValueChange={(val) => setUplift(val[0])}
            />
            <div className="text-sm text-muted-foreground mt-1">Uplift: {uplift}%</div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        <Card>
          <CardContent className="grid gap-2 pt-4">
            <div><strong>Engaged Monthly Visitors:</strong> {engagedTraffic.toLocaleString()}</div>
            <div><strong>Current Monthly Conversions:</strong> {baseConversions.toLocaleString()}</div>
            <div><strong>Current Monthly Revenue:</strong> £{baseRevenue.toLocaleString()}</div>
            <div><strong>Additional Monthly Conversions from Uplift:</strong> {upliftedConversions.toLocaleString()}</div>
            <div><strong>Additional Monthly Revenue:</strong> £{upliftedRevenue.toLocaleString()}</div>
            <div><strong>12-Month Additional Revenue:</strong> £{annualUplift.toLocaleString()}</div>
            <div><strong>Projected Total Revenue with Connect (Annual):</strong> £{annualTotalRevenue.toLocaleString()}</div>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground pt-4">
          Note: This projection blends impact across all buyer types — including registrants who haven’t bid yet, lost bidders, and re-engagement of past winners — all retargeted automatically through email using Acoustic Connect.
        </p>
      </div>
    </div>
  );
}
