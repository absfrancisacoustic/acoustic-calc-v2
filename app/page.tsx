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
  const monthlyRevenueAfter = monthlyLots * parseFloat(upliftedLotValue);
  const annualRevenueBefore = monthlyRevenueBefore * 12;
  const annualRevenueAfter = monthlyRevenueAfter * 12;

  const upliftMonthly = monthlyRevenueAfter - monthlyRevenueBefore;
  const upliftAnnual = annualRevenueAfter - annualRevenueBefore;

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

  const formatCurrency2dp = (value) =>
    new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <div className="max-w-7xl mx-auto p-12 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between mb-8 items-center">
        <img src="/johnpye-logo.png" alt="John Pye Logo" className="h-14" />
        <h2 className="text-2xl font-semibold text-center">
          Acoustic Connect ROI: John Pye & <span className="text-red-500">Sons</span>
        </h2>
        <img src="/acoustic.png" alt="Acoustic Logo" className="h-12" />
      </div>

      <div className="mb-6">
        <label className="block text-base font-medium text-gray-700">
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

      <div className="grid grid-cols-3 gap-6 mt-8 text-base">
        <div className="font-semibold text-gray-900 text-lg">Metric</div>
        <div className="font-semibold text-gray-900 text-lg">Current</div>
        <div className="font-semibold text-gray-900 text-lg">Estimated With Connect</div>

        <div>Total Weekly Lots</div>
        <div className="font-semibold">40,000</div>
        <div className="font-semibold">40,000</div>

        <div>Average Bids Per Lot</div>
        <div>{avgBidsPerLot}</div>
        <div className="text-green-600 font-semibold">{upliftedBidsPerLot}</div>

        <div>Average Lot Value</div>
        <div>{formatCurrency2dp(avgLotValue)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency2dp(upliftedLotValue)}</div>

        <div>Total Monthly Revenue</div>
        <div>{formatCurrency(monthlyRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(monthlyRevenueAfter)}</div>

        <div>Total Annual Revenue</div>
        <div>{formatCurrency(annualRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(annualRevenueAfter)}</div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-16 text-center">
        <div>
          <h3 className="text-base font-semibold text-gray-700">Monthly Revenue Uplift</h3>
          <p className="text-green-600 font-semibold text-lg">{formatCurrency(upliftMonthly)}</p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-700">Annual Revenue Uplift</h3>
          <p className="text-green-600 font-semibold text-lg">{formatCurrency(upliftAnnual)}</p>
        </div>
      </div>
    </div>
  );
}
