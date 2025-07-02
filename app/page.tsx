'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  const [traffic, setTraffic] = useState(758800)
  const [conversionRate, setConversionRate] = useState(18.14)
  const [averageOrderValue, setAOV] = useState(34.15)
  const [upliftPercent, setUpliftPercent] = useState(5)

  const engagedVisitors = traffic * 0.5955
  const baseConversions = (engagedVisitors * conversionRate) / 100
  const baseRevenue = baseConversions * averageOrderValue
  const upliftedConversions = baseConversions * (1 + upliftPercent / 100)
  const upliftedRevenue = upliftedConversions * averageOrderValue
  const additionalConversions = upliftedConversions - baseConversions
  const additionalRevenue = upliftedRevenue - baseRevenue
  const annualRevenueWithConnect = upliftedRevenue * 12

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">
        Acoustic Connect ROI: John Pye & Sons
      </h1>

      <Card>
        <CardContent className="space-y-4 pt-6">
          <div>
            <label className="block mb-1">Monthly Website Visits</label>
            <Input
              type="number"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="block mb-1">Base Conversion Rate (% of engaged traffic)</label>
            <Input
              type="number"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="block mb-1">Average Order Value (£)</label>
            <Input
              type="number"
              value={averageOrderValue}
              onChange={(e) => setAOV(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="block mb-1">Conversion Uplift (%)</label>
            <Slider
              min={0}
              max={25}
              step={1}
              value={[upliftPercent]}
              onValueChange={(value) => setUpliftPercent(value[0])}
            />
            <p className="text-sm text-muted-foreground mt-1">Uplift: {upliftPercent}%</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-6">
          <p><strong>Engaged Monthly Visitors:</strong> {engagedVisitors.toLocaleString()}</p>
          <p><strong>Current Monthly Conversions:</strong> {baseConversions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          <p><strong>Current Monthly Revenue:</strong> £{baseRevenue.toLocaleString(undefined, { minimumFractionDigits: 0 })}</p>
          <p><strong>Additional Monthly Conversions from Uplift:</strong> {additionalConversions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          <p><strong>Additional Monthly Revenue:</strong> £{additionalRevenue.toLocaleString(undefined, { minimumFractionDigits: 0 })}</p>
          <p><strong>12-Month Additional Revenue:</strong> £{(additionalRevenue * 12).toLocaleString(undefined, { minimumFractionDigits: 0 })}</p>
          <p><strong>Projected Total Revenue with Connect (Annual):</strong> £{annualRevenueWithConnect.toLocaleString(undefined, { minimumFractionDigits: 0 })}</p>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center pt-4 px-2">
        <Image src="/johnpye.png" alt="John Pye Logo" width={110} height={40} />
        <Image src="/acoustic.png" alt="Acoustic Logo" width={110} height={40} />
      </div>
    </div>
  )
}
