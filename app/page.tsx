'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [traffic, setTraffic] = useState(10000)
  const [conversionRate, setConversionRate] = useState(2)
  const [averageOrderValue, setAOV] = useState(50)
  const [upliftPercent, setUpliftPercent] = useState(10)

  const baseRevenue = (traffic * (conversionRate / 100) * averageOrderValue)
  const upliftedRevenue = baseRevenue * (1 + upliftPercent / 100)
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
            <label>Monthly Website Traffic</label>
            <Input
              type="number"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Conversion Rate (%)</label>
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
            <label>Uplift from Personalisation (%)</label>
            <Slider
              min={0}
              max={25}
              step={1}
              value={[upliftPercent]}
              onValueChange={([val]) => setUpliftPercent(val)}
            />
            <p className="text-sm text-muted-foreground">Uplift: {upliftPercent}%</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-2 pt-6">
          <p><strong>Current Revenue:</strong> £{baseRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p><strong>Revenue with Connect (incl. uplift from retargeting & personalisation):</strong> £{upliftedRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p className="text-green-600 font-semibold">Monthly Uplifted Revenue: £{additionalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <hr />
          <p><strong>Annual Current Revenue:</strong> £{annualBaseRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p><strong>Annual Revenue with Connect:</strong> £{annualUpliftedRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p className="text-green-600 font-semibold">Annual Uplifted Revenue: £{annualAdditionalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mt-6">
        <img src="/johnpye.png" alt="John Pye Logo" className="w-28" />
        <img src="/acoustic.png" alt="Acoustic Logo" className="w-28" />
      </div>
    </div>
  )
}

