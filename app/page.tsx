'use client'

import { useState } from "react";

export default function AuctionRevenueCalculatorB() {
  const [upliftPercent, setUpliftPercent] = useState(5);

  const weeklyLots = 40000;
  const monthlyLots = weeklyLots * 4.3;
  const avgLotValue = 34.15;
  const avgBidsPerLot = 10.88;

  const upliftMultiplier = 1 + upliftPercent / 100;
  const upliftedBidsPerLot = (avgBidsPerLot * upliftMultiplier).toFixed(3);
  const upliftedLotValue = (avgLotValue * upliftMultiplier).toFixed(4);

  const monthlyRevenueBefore = monthlyLots * avgLotValue;
  const monthlyRevenueAfter = monthlyLots * upliftedLotValue;
  const annualRevenueBefore = monthlyRevenueBefore * 12;
  const annualRevenueAfter = monthlyRevenueAfter * 12;

  const upliftMonthly = monthlyRevenueAfter - monthlyRevenueBefore;
  const upliftAnnual = annualRevenueAfter - annualRevenueBefore;

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="max-w-6xl mx-auto p-10 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between mb-8 items-center">
        <img src="/johnpye-logo.png" alt="John Pye Logo" className="h-14" />
        <h2 className="text-2xl font-semibold text-center">
          Acoustic Connect ROI: John Pye & Sons
        </h2>
        <img src="/acoustic.png" alt="Acoustic Logo" className="h-12" />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Uplift From Personalisation (%): {upliftPercent}%
        </label>
        <input
          type="range"
          min={1}
          max={25}
          value={upliftPercent}
          onChange={(e) => setUpliftPercent(Number(e.target.value))}
          className="w-full mt-2"
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8 text-sm">
        <div className="font-semibold text-gray-800 text-base">Metric</div>
        <div className="font-semibold text-gray-800 text-base">Current</div>
        <div className="font-semibold text-gray-800 text-base">Estimated With Connect</div>

        <div>Total Weekly Lots</div>
        <div>40,000</div>
        <div>40,000</div>

        <div>Average Bids Per Lot</div>
        <div>{avgBidsPerLot}</div>
        <div className="text-green-600 font-semibold">{upliftedBidsPerLot}</div>

        <div>Average Lot Value</div>
        <div>{avgLotValue.toFixed(2)}</div>
        <div className="text-green-600 font-semibold">{Number(upliftedLotValue).toFixed(2)}</div>

        <div>Total Monthly Revenue</div>
        <div>{formatCurrency(monthlyRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(monthlyRevenueAfter)}</div>

        <div>Total Annual Revenue</div>
        <div>{formatCurrency(annualRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(annualRevenueAfter)}</div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-12 text-center">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Monthly Revenue Uplift</h3>
          <p className="text-green-600 font-semibold text-lg">{formatCurrency(upliftMonthly)}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Annual Revenue Uplift</h3>
          <p className="text-green-600 font-semibold text-lg">{formatCurrency(upliftAnnual)}</p>
        </div>
      </div>
    </div>
  );
}
