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

  const engagedVisitors = traffic * 0.5953
  const currentConversions = Math.round(engagedVisitors * (conversionRate / 100))
  const upliftedConversions = Math.round(currentConversions * (upliftPercent / 100))

  const currentRevenue = currentConversions * averageOrderValue
  const additionalRevenue = upliftedConversions * averageOrderValue

  const annualCurrentRevenue = currentRevenue * 12
  const annualAdditionalRevenue = additionalRevenue * 12
  const annualProjectedRevenue = annualCurrentRevenue + annualAdditionalRevenue

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
              defaultValue={[upliftPercent]}
              max={25}
              step={1}
              onValueChange={([value]) => setUpliftPercent(value)}
            />
            <div className="text-sm text-muted-foreground">Uplift: {upliftPercent}%</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-6">
          <p><strong>Engaged Monthly Visitors:</strong> {engagedVisitors.toLocaleString()}</p>
          <p><strong>Current Monthly Conversions:</strong> {currentConversions.toLocaleString()}</p>
          <p><strong>Current Monthly Revenue:</strong> £{currentRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          <p className="text-green-600 font-semibold">Additional Monthly Revenue: £{additionalRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          <p><strong>Annual Current Revenue:</strong> £{annualCurrentRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          <p><strong>Annual Revenue with Connect:</strong> £{annualProjectedRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          <p className="text-green-600 font-semibold">Annual Uplifted Revenue: £{annualAdditionalRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        </CardContent>
      </Card>
    </div>
  )
}
