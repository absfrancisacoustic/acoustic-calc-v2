'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [traffic, setTraffic] = useState(758800)
  const [conversionRate, setConversionRate] = useState(18.14)
  const [averageOrderValue, setAOV] = useState(34.15)
  const [upliftPercent, setUpliftPercent] = useState(5)

  const engagedTraffic = traffic * 0.595
  const baseConversions = engagedTraffic * (conversionRate / 100)
  const baseRevenue = baseConversions * averageOrderValue
  const upliftedConversions = baseConversions * (1 + upliftPercent / 100)
  const upliftedRevenue = upliftedConversions * averageOrderValue
  const additionalRevenue = upliftedRevenue - baseRevenue

  const annualBaseRevenue = baseRevenue * 12
  const annualUpliftedRevenue = upliftedRevenue * 12
  const annualAdditionalRevenue = additionalRevenue * 12

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">
        Acoustic Connect ROI: John Pye & Sons
      </h1>

      <Card>
        <CardContent className="space-y-4 pt-6">
          <div>
            <label>Monthly Website Visits</label>
            <Input
              type="number"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Base Conversion Rate (% of engaged traffic)</label>
            <Input
              type="number"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Average Order Value (£)</label>
            <Input
              type="number"
              value={averageOrderValue}
              onChange={(e) => setAOV(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Conversion Uplift (%)</label>
            <Slider
              value={[upliftPercent]}
              onValueChange={(val) => setUpliftPercent(val[0])}
              min={0}
              max={25}
              step={1}
            />
            <p className="text-sm text-muted-foreground">Uplift: {upliftPercent}%</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-6 text-sm">
          <p><strong>Engaged Monthly Visitors:</strong> {engagedTraffic.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p><strong>Current Monthly Conversions:</strong> {baseConversions.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
          <p><strong>Current Monthly Revenue:</strong> £{baseRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p className="text-green-600 font-semibold">Additional Monthly Revenue: £{additionalRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p><strong>Annual Current Revenue:</strong> £{annualBaseRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p><strong>Annual Revenue with Connect:</strong> £{annualUpliftedRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p className="text-green-600 font-semibold">Annual Uplifted Revenue: £{annualAdditionalRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
        </CardContent>
      </Card>

      <div className="flex justify-between px-6 pt-4">
        <img src="/johnpye.png" alt="John Pye Logo" className="h-12" />
        <img src="/acoustic.png" alt="Acoustic Logo" className="h-10" />
      </div>
    </div>
  )
}
