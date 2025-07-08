'use client'

import { useState } from "react";

export default function AuctionRevenueCalculatorB() {
  const [upliftPercent, setUpLiftPercent] = useState(5);

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

  const formatCurrency = (value: number | string) =>
    new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(value));

  const formatCurrency2dp = (value: number | string) =>
    new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(value));

  return (
    <div className="max-w-7xl mx-auto p-12 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between mb-8 items-center">
        <img src="/johnpye.png" alt="John Pye Logo" className="h-16" />
        <h2 className="text-2xl font-semibold text-center">
          Acoustic Connect ROI: John Pye & Sons
        </h2>
        <img src="/acoustic.png" alt="Acoustic Logo" className="h-12" />
      </div>

      <div className="mb-8">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Uplift From Personalisation (%): {upliftPercent}%
        </label>
        <input
          type="range"
          min={1}
          max={25}
          value={upliftPercent}
          onChange={(e) => setUpLiftPercent(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-3 gap-8 text-lg text-center mt-12">
        <div className="font-semibold text-gray-900">Metric</div>
        <div className="font-semibold text-gray-900">Current</div>
        <div className="font-semibold text-gray-900">Estimated With Connect</div>

        <div>Total Weekly Lots</div>
        <div className="font-semibold">40,000</div>
        <div className="font-semibold">40,000</div>

        <div>Average Bids Per Lot</div>
        <div className="font-semibold">{avgBidsPerLot}</div>
        <div className="text-green-600 font-semibold">{upliftedBidsPerLot}</div>

        <div>Average Lot Value</div>
        <div className="font-semibold">{formatCurrency2dp(avgLotValue)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency2dp(upliftedLotValue)}</div>

        <div>Total Monthly Revenue</div>
        <div className="font-semibold">{formatCurrency(monthlyRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(monthlyRevenueAfter)}</div>

        <div>Total Annual Revenue</div>
        <div className="font-semibold">{formatCurrency(annualRevenueBefore)}</div>
        <div className="text-green-600 font-semibold">{formatCurrency(annualRevenueAfter)}</div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-16 text-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Monthly Revenue Uplift</h3>
          <p className="text-green-600 font-semibold text-xl">{formatCurrency(upliftMonthly)}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Annual Revenue Uplift</h3>
          <p className="text-green-600 font-semibold text-xl">{formatCurrency(upliftAnnual)}</p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Industry Uplift Benchmarks When Utilising Personalisation and Retargeting
        </h3>
        <table className="table-auto w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Source</th>
              <th className="border px-4 py-2">Reported Uplift</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <a
                  href="https://instapage.com/blog/personalization-statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Instapage
                </a>
              </td>
              <td className="border px-4 py-2">20% increase in sales from site personalisation</td>
              <td className="border px-4 py-2">April 2025</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <a
                  href="https://www.bcg.com/publications/2024/what-consumers-want-from-personalization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Boston Consulting Group
                </a>
              </td>
              <td className="border px-4 py-2">30–40% uplift in conversion from personalisation (Global retail study)</td>
              <td className="border px-4 py-2">2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <a
                  href="https://segment.com/state-of-personalization-report/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Twilio Segment
                </a>
              </td>
              <td className="border px-4 py-2">89% of execs see personalisation as crucial; 80% increase in consumer spending</td>
              <td className="border px-4 py-2">2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <a
                  href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  McKinsey
                </a>
              </td>
              <td className="border px-4 py-2">10–15% increase in revenue from personalisation</td>
              <td className="border px-4 py-2">November 2021</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <a
                  href="https://vwo.com/blog/website-personalization-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  VWO
                </a>
              </td>
              <td className="border px-4 py-2">19% average sales uplift from onsite personalisation</td>
              <td className="border px-4 py-2">April 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
