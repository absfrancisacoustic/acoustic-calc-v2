'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [lots, setLots] = useState(400000)
  const [bidsPerLot, setBidsPerLot] = useState(10.88)
  const [avgLotValue, setAvgLotValue] = useState(34.15)
  const [avgInvoiceValue, setAvgInvoiceValue] = useState(175)
  const [upliftPercent, setUpliftPercent] = useState(5)

  const upliftMultiplier = 1 + upliftPercent / 100

  const upliftedLotValue = avgLotValue * upliftMultiplier
  const upliftedInvoiceValue = avgInvoiceValue * upliftMultiplier

  const monthlyLotRevenue = lots * upliftedLotValue
  const monthlyInvoiceRevenue = lots * upliftedInvoiceValue

  const annualLotRevenue = monthlyLotRevenue * 4.33 * 12 / 4.33
  const annualInvoiceRevenue = monthlyInvoiceRevenue * 4.33 * 12 / 4.33

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">
        Acoustic Connect ROI: John Pye & Sons
      </h1>

      <Card>
        <CardContent className="space-y-4 pt-6">
          <div>
            <label>Total Weekly Lots</label>
            <Input
              type="number"
              value={lots}
              onChange={(e) => setLots(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Avg Bids Per Lot</label>
            <Input
              type="number"
              value={bidsPerLot}
              onChange={(e) => setBidsPerLot(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Average Lot Value (£)</label>
            <Input
              type="number"
              value={avgLotValue}
              onChange={(e) => setAvgLotValue(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Average Invoice Value (£)</label>
            <Input
              type="number"
              value={avgInvoiceValue}
              onChange={(e) => setAvgInvoiceValue(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Uplift from Personalisation (%)</label>
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
          <p><strong>Monthly Revenue (Avg. Lot Value):</strong> £{monthlyLotRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p><strong>Monthly Revenue (Avg. Invoice Value):</strong> £{monthlyInvoiceRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p className="text-green-600 font-semibold">Annual Revenue (Avg. Lot Value): £{annualLotRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
          <p className="text-green-600 font-semibold">Annual Revenue (Avg. Invoice Value): £{annualInvoiceRevenue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
        </CardContent>
      </Card>

      <div className="flex justify-between px-6 pt-4">
        <img src="/johnpye.png" alt="John Pye Logo" className="h-12" />
        <img src="/acoustic.png" alt="Acoustic Logo" className="h-10" />
      </div>
    </div>
  )
}
