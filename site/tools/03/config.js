// ============================================
// CONFIG - PAKET 03 - FINANCE TOOLS SUITE
// ============================================

const ICONS = {
    logo: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="11" x2="8" y2="11.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="12" y1="11" x2="12" y2="11.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="16" y1="11" x2="16" y2="11.01"></line><line x1="16" y1="14" x2="16" y2="14.01"></line></svg>',
    home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    about: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
    contact: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    
    loan: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1v22"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
    investment: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
    tax: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>',
    utility: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    
    calculator: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="11" x2="8" y2="11.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="12" y1="11" x2="12" y2="11.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="16" y1="11" x2="16" y2="11.01"></line><line x1="16" y1="14" x2="16" y2="14.01"></line></svg>',
    dollar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
    chart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
    wallet: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>',
    coin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><line x1="12" y1="6" x2="12" y2="18"></line></svg>'
};

// ===== CONTENT LIBRARY =====
const CONTENT_LIBRARY = {
    heroTitles: [
        'Professional Finance Tools',
        'Free Financial Calculators',
        'Online Money Management Tools',
        'Financial Planning Suite',
        'Smart Finance Calculator'
    ],
    
    heroSubtitles: [
        'Make smart money decisions with our advanced calculators',
        'Plan your financial future with confidence',
        'Simplify your finances with easy-to-use tools',
        'Take control of your money today',
        'Calculate, plan, and grow your wealth'
    ],
    
    aboutParagraphs: [
        'Our platform provides a comprehensive suite of financial calculators designed to help you make informed decisions about loans, investments, and savings. All tools are free, privacy-friendly, and work entirely in your browser.',
        'We believe financial planning should be accessible to everyone. Our tools help you understand complex calculations without needing a financial advisor or expensive software.',
        'From loan payments to retirement planning, our calculators give you instant, accurate results. No registration required, no data collected, and completely free to use.',
        'Take the guesswork out of financial planning. Our easy-to-use calculators help you understand your options and make smarter money decisions.',
        'We provide professional-grade financial tools that work entirely in your browser. Privacy-first, fast, and completely free.'
    ],
    
    toolContent: {
        // ===== LOAN TOOLS =====
        'loan-calculator': [
            {
                intro: 'A loan calculator helps you determine your monthly payment based on the loan amount, interest rate, and repayment period. This essential tool gives you a clear picture of your financial commitment before you sign any loan agreement.',
                explanation: 'The calculator uses the standard amortization formula to compute your payment. Each payment consists of principal and interest portions. In the early months of your loan, a larger portion goes toward interest. As the loan matures, more of your payment applies to the principal balance.',
                tips: 'Before taking a loan, compare offers from multiple lenders. Even a small difference in interest rate can save you thousands over the life of the loan.',
                faqs: [
                    { q: 'How is the monthly payment calculated?', a: 'Using the amortization formula: Payment = P × r × (1+r)^n / ((1+r)^n - 1)' },
                    { q: 'What is amortization?', a: 'The gradual reduction of debt through regular payments covering principal and interest.' },
                    { q: 'Should I choose a longer or shorter term?', a: 'Shorter terms have higher payments but less total interest.' }
                ]
            },
            {
                intro: 'Understanding your loan payments before borrowing is crucial for financial health. Our loan calculator provides instant, accurate calculations for any loan scenario.',
                explanation: 'By entering the loan amount, annual interest rate, and loan duration, the calculator applies compound interest mathematics to show your exact monthly obligation.',
                tips: 'Always factor in additional costs like origination fees and processing fees when budgeting for a loan.',
                faqs: [
                    { q: 'What factors affect my loan payment?', a: 'Loan amount, interest rate, and loan term.' },
                    { q: 'Can I prepay my loan?', a: 'Most loans allow prepayment, but check for penalties.' },
                    { q: 'What is APR vs interest rate?', a: 'APR includes all fees, giving a more accurate cost picture.' }
                ]
            },
            {
                intro: 'Planning to borrow money? Knowing your monthly payment beforehand helps you budget properly and avoid financial stress.',
                explanation: 'This calculator applies the time-value of money concept to compute equal monthly payments that fully amortize your loan over the selected period.',
                tips: 'Use the 28/36 rule: housing expenses should not exceed 28% of gross income.',
                faqs: [
                    { q: 'How accurate are loan calculators?', a: 'Very accurate for standard amortizing loans.' },
                    { q: 'What is a balloon payment?', a: 'A large final payment due at the end of some loans.' },
                    { q: 'Can I calculate bi-weekly payments?', a: 'Yes, bi-weekly payments result in 26 payments yearly.' }
                ]
            }
        ],
        
        // ===== INVESTMENT TOOLS =====
        'sip-calculator': [
            {
                intro: 'A SIP (Systematic Investment Plan) calculator helps you estimate the future value of regular monthly investments. This powerful tool shows how small, consistent contributions can grow significantly over time.',
                explanation: 'The calculator uses the future value of annuity formula to compute how regular investments grow with compound interest. Each monthly contribution earns returns, and those returns themselves earn more returns.',
                tips: 'Start SIP as early as possible. Even small monthly amounts can grow to significant sums over 10-20 years due to compounding.',
                faqs: [
                    { q: 'What is SIP?', a: 'Systematic Investment Plan - investing a fixed amount regularly, usually monthly.' },
                    { q: 'How much should I invest monthly?', a: 'Aim for 15-20% of your monthly income.' },
                    { q: 'What is a good return rate?', a: 'For equity mutual funds, 10-12% annually is common.' }
                ]
            },
            {
                intro: 'Plan your wealth creation journey with our SIP calculator. See how regular monthly investments can build substantial wealth over time.',
                explanation: 'Enter your monthly investment amount, expected annual return, and investment duration. The calculator shows the total invested amount and the final corpus value.',
                tips: 'Increase your SIP amount by 10% annually. This step-up strategy significantly boosts your final corpus.',
                faqs: [
                    { q: 'How does SIP work?', a: 'You invest a fixed amount monthly, which is used to purchase fund units.' },
                    { q: 'Is SIP better than lumpsum?', a: 'SIP reduces risk through dollar-cost averaging.' },
                    { q: 'Can I stop SIP anytime?', a: 'Yes, most SIPs can be paused or stopped.' }
                ]
            },
            {
                intro: 'Discover the power of disciplined investing with our SIP calculator. Regular small investments can grow into a large corpus.',
                explanation: 'This tool calculates the future value of monthly contributions using the compound interest principle. It shows both total investment and total returns separately.',
                tips: 'Start early, stay consistent, and let compounding work its magic over decades.',
                faqs: [
                    { q: 'What is the minimum SIP amount?', a: 'Many funds allow SIPs starting from as low as $10/month.' },
                    { q: 'How long should I run SIP?', a: 'Minimum 5-10 years for meaningful compounding.' },
                    { q: 'What happens if I miss a SIP?', a: 'Missing one installment does not cancel the SIP.' }
                ]
            }
        ],
        
        // ===== TAX TOOLS =====
        'vat-calculator': [
            {
                intro: 'Calculate VAT (Value Added Tax) quickly with our tool. Add VAT to a net price or extract VAT from a gross price.',
                explanation: 'VAT is calculated as a percentage of the net price. The tool computes both net-to-gross and gross-to-net conversions using the selected VAT rate.',
                tips: 'Always use the correct VAT rate for your region. Rates vary by country and product type.',
                faqs: [
                    { q: 'What is VAT?', a: 'A consumption tax added to goods and services.' },
                    { q: 'How to calculate VAT?', a: 'Multiply net price by VAT rate, then add to net price.' },
                    { q: 'VAT vs Sales Tax?', a: 'VAT is applied at each production stage, sales tax only at final sale.' }
                ]
            },
            {
                intro: 'Quickly determine VAT amounts with our simple calculator. Perfect for businesses and consumers.',
                explanation: 'Enter the amount, select VAT rate, and choose whether to add or extract VAT. The calculator instantly shows the VAT amount and final price.',
                tips: 'Keep records of VAT calculations for tax filing purposes.',
                faqs: [
                    { q: 'What goods are VAT exempt?', a: 'Essential items like food and medicine in many countries.' },
                    { q: 'Can I reclaim VAT?', a: 'Businesses can usually reclaim VAT on business expenses.' },
                    { q: 'What is the standard VAT rate?', a: 'Varies by country, typically 5-25%.' }
                ]
            },
            {
                intro: 'Our VAT calculator makes tax calculations simple and error-free.',
                explanation: 'The tool handles both adding VAT to prices and extracting VAT from final amounts. It supports multiple VAT rates.',
                tips: 'Double-check VAT rates for your specific product category.',
                faqs: [
                    { q: 'How is VAT different from GST?', a: 'They are similar consumption taxes with different names.' },
                    { q: 'Do I charge VAT on services?', a: 'Yes, most services are VAT taxable.' },
                    { q: 'What is zero-rated VAT?', a: 'Items taxed at 0% VAT, meaning no VAT charged.' }
                ]
            }
        ],
        
        // ===== UTILITY TOOLS =====
        'currency-converter': [
            {
                intro: 'Convert between currencies using manually updated exchange rates. This tool works offline and does not require an internet connection.',
                explanation: 'Enter the amount and exchange rate to convert between currencies. The calculator multiplies the amount by the rate to show the converted value.',
                tips: 'Update exchange rates regularly for accuracy. Rates fluctuate daily.',
                faqs: [
                    { q: 'Where can I find exchange rates?', a: 'Central bank websites, financial news sites, or your bank.' },
                    { q: 'Do banks use the same rate?', a: 'No, banks add a spread to the interbank rate.' },
                    { q: 'How often should I update rates?', a: 'Daily for business use, weekly for personal use.' }
                ]
            },
            {
                intro: 'Convert any currency with manual exchange rates. Simple, fast, and works offline.',
                explanation: 'This tool allows you to set your own exchange rate and convert amounts accurately without external APIs.',
                tips: 'For large conversions, compare rates from multiple sources.',
                faqs: [
                    { q: 'What is a mid-market rate?', a: 'The midpoint between buy and sell rates.' },
                    { q: 'Should I use bank rates?', a: 'Bank rates include fees, so actual conversion may differ.' },
                    { q: 'Can I save multiple rates?', a: 'Keep notes of frequently used rates for quick reference.' }
                ]
            },
            {
                intro: 'A simple currency converter that respects your privacy. No tracking, no API, just accurate conversions.',
                explanation: 'Input your amount and the current exchange rate to get instant conversion results without sending data to any server.',
                tips: 'Bookmark this tool for quick access when traveling or shopping online.',
                faqs: [
                    { q: 'Is this converter accurate?', a: 'As accurate as the exchange rate you provide.' },
                    { q: 'Can I use this offline?', a: 'Yes, the tool works entirely in your browser.' },
                    { q: 'What is currency spread?', a: 'The difference between buy and sell rates.' }
                ]
            }
        ],
        
        // ===== Tambahan untuk tools lainnya (ringkas) =====
        'mortgage-calculator': [
            { intro: 'Estimate monthly mortgage payments.', explanation: 'Calculates principal, interest, taxes, and insurance.', tips: 'Get pre-approved before house hunting.', faqs: [{q:'What is PMI?',a:'Mortgage insurance for low down payments.'},{q:'Fixed vs ARM?',a:'Fixed is stable, ARM may start lower.'},{q:'How much down payment?',a:'20% avoids PMI.'}] },
            { intro: 'Plan your home purchase with confidence.', explanation: 'Complete monthly cost including escrow.', tips: 'Shop around for mortgage rates.', faqs: [{q:'What is escrow?',a:'Account for taxes and insurance.'},{q:'Closing costs?',a:'2-5% of home price.'},{q:'15yr vs 30yr?',a:'15yr saves interest.'}] },
            { intro: 'Know what you can afford before buying.', explanation: 'Realistic payment with all costs included.', tips: 'Pre-approval strengthens your offer.', faqs: [{q:'Credit score needed?',a:'620+ for conventional.'},{q:'What is DTI?',a:'Debt-to-income ratio.'},{q:'Zero down payment?',a:'VA/USDA loans.'}] }
        ],
        'emi-calculator': [
            { intro: 'Calculate Equated Monthly Installments.', explanation: 'Fixed monthly payment for any loan.', tips: 'Choose shortest affordable tenure.', faqs: [{q:'How is EMI calculated?',a:'Standard amortization formula.'},{q:'Can EMI change?',a:'Fixed vs floating rates.'},{q:'Miss an EMI?',a:'Penalties apply.'}] },
            { intro: 'Know your installment before borrowing.', explanation: 'Reducing balance method calculation.', tips: 'Shortest tenure saves interest.', faqs: [{q:'What is reducing balance?',a:'Interest on remaining principal.'},{q:'Prepayment allowed?',a:'Check lock-in period.'},{q:'Tenure effect?',a:'Longer = lower EMI.'}] },
            { intro: 'Plan your loan repayment today.', explanation: 'Bank-standard EMI computation.', tips: 'Make occasional lump-sum payments.', faqs: [{q:'Which loans use EMI?',a:'Personal, car, home loans.'},{q:'EMI includes fees?',a:'No, processing fees separate.'},{q:'Refinance possible?',a:'Yes, check transfer fees.'}] }
        ],
        'simple-interest': [
            { intro: 'Calculate interest on principal only.', explanation: 'Formula: I = P × r × t.', tips: 'Good for short-term loans.', faqs: [{q:'Formula?',a:'I = P × r × t.'},{q:'When used?',a:'Short-term loans.'},{q:'Simple vs compound?',a:'Simple is on principal only.'}] },
            { intro: 'Quick simple interest calculations.', explanation: 'Linear interest computation.', tips: 'Compare with compound for investments.', faqs: [{q:'How is time calculated?',a:'Years = months/12.'},{q:'Better for loans?',a:'Yes, less total interest.'},{q:'Can rates change?',a:'Fixed vs variable.'}] },
            { intro: 'Understand simple interest basics.', explanation: 'Interest on original amount only.', tips: 'Confirm loan type before signing.', faqs: [{q:'What is principal?',a:'Original borrowed amount.'},{q:'Monthly calculation?',a:'Use months/12.'},{q:'Typical rates?',a:'Varies by loan type.'}] }
        ],
        'compound-interest': [
            { intro: 'Watch your money grow exponentially.', explanation: 'Formula: A = P(1+r/n)^(nt).', tips: 'Start investing early.', faqs: [{q:'How does compounding work?',a:'Interest earns interest.'},{q:'APR vs APY?',a:'APY includes compounding.'},{q:'Frequency matters?',a:'More frequent = better.'}] },
            { intro: 'The eighth wonder of the world.', explanation: 'Exponential growth calculation.', tips: 'Rule of 72: divide by rate.', faqs: [{q:'Which investments compound?',a:'Savings, CDs, stocks.'},{q:'How much to invest?',a:'15-20% of income.'},{q:'Can it work against you?',a:'Yes, credit card debt.'}] },
            { intro: 'Build wealth with compound interest.', explanation: 'Future value computation.', tips: 'Reinvest dividends automatically.', faqs: [{q:'Realistic return rate?',a:'Stocks: 7-10%.'},{q:'How important is time?',a:'Most critical factor.'},{q:'Monthly vs annual?',a:'Monthly slightly better.'}] }
        ],
        'amortization': [
            { intro: 'See exactly where your money goes.', explanation: 'Payment-by-payment breakdown.', tips: 'Extra payments save interest.', faqs: [{q:'Why mostly interest early?',a:'Interest on highest balance.'},{q:'Save on interest?',a:'Extra principal payments.'},{q:'Good amortization period?',a:'Shortest affordable.'}] },
            { intro: 'Complete loan payment schedule.', explanation: 'Detailed principal vs interest table.', tips: 'Review total interest figure.', faqs: [{q:'Amortization vs depreciation?',a:'Debt vs asset value.'},{q:'Export schedule?',a:'Copy to spreadsheet.'},{q:'Skip a payment?',a:'Extends loan term.'}] },
            { intro: 'Plan for early loan payoff.', explanation: 'Track balance reduction over time.', tips: 'Identify key payoff milestones.', faqs: [{q:'Negative amortization?',a:'Balance increases.'},{q:'Extra payment effect?',a:'Shortens term significantly.'},{q:'Schedule required?',a:'Lenders must provide.'}] }
        ],
        'debt-payoff': [
            { intro: 'Create a plan to become debt-free.', explanation: 'Snowball vs avalanche comparison.', tips: 'Roll payments as debts clear.', faqs: [{q:'Snowball vs avalanche?',a:'Small balance vs high interest.'},{q:'How much to pay?',a:'As much as possible.'},{q:'Consolidate?',a:'Can simplify payments.'}] },
            { intro: 'Take control of your finances.', explanation: 'Structured debt repayment plan.', tips: 'Negotiate lower rates.', faqs: [{q:'What is snowball?',a:'Smallest debt first.'},{q:'What is avalanche?',a:'Highest interest first.'},{q:'How long?',a:'2-5 years typical.'}] },
            { intro: 'Break free from debt today.', explanation: 'Compare payoff strategies.', tips: 'Cut expenses temporarily.', faqs: [{q:'Use savings?',a:'Keep small emergency fund.'},{q:'What is DTI?',a:'Debt-to-income ratio.'},{q:'Settle for less?',a:'Possible but hurts credit.'}] }
        ],
        'loan-comparison': [
            { intro: 'Compare two loan offers side by side.', explanation: 'Total cost comparison.', tips: 'Compare total cost, not just payments.', faqs: [{q:'What to compare?',a:'Rate, term, total cost.'},{q:'Lower rate or shorter term?',a:'Compare both options.'},{q:'Hidden fees?',a:'Check origination fees.'}] },
            { intro: 'Make informed borrowing decisions.', explanation: 'Side-by-side loan analysis.', tips: 'Get quotes from 3+ lenders.', faqs: [{q:'Fixed vs variable?',a:'Fixed is predictable.'},{q:'Good loan term?',a:'Shortest affordable.'},{q:'Refinance later?',a:'Yes, if rates drop.'}] },
            { intro: 'Do not accept the first offer.', explanation: 'True cost difference revealed.', tips: 'Rates vary between lenders.', faqs: [{q:'How are rates set?',a:'Credit, income, loan type.'},{q:'What is APR?',a:'Rate plus fees.'},{q:'Pay points?',a:'Lower rate for upfront fee.'}] }
        ],
        'lumpsum-investment': [
            { intro: 'Calculate returns on one-time investments.', explanation: 'FV = P(1+r)^n formula.', tips: 'Lumpsum benefits from long horizons.', faqs: [{q:'What is lumpsum?',a:'One-time investment.'},{q:'Better than SIP?',a:'Depends on market timing.'},{q:'How much to invest?',a:'Depends on goals.'}] },
            { intro: 'See how one investment grows.', explanation: 'Compound growth calculation.', tips: 'Invest windfalls immediately.', faqs: [{q:'Tax implications?',a:'Depends on investment type.'},{q:'Hold how long?',a:'Longer = better.'},{q:'What return rate?',a:'7-10% stocks.'}] },
            { intro: 'Maximize one-time investment returns.', explanation: 'Future value computation.', tips: 'Reinvest all returns.', faqs: [{q:'Lumpsum vs SIP?',a:'Lumpsum: all at once.'},{q:'Risk?',a:'Market timing risk.'},{q:'Best assets?',a:'Index funds.'}] }
        ],
        'stock-profit': [
            { intro: 'Calculate stock trading profits.', explanation: '(Sell - Buy) × quantity.', tips: 'Include brokerage fees.', faqs: [{q:'How is profit calculated?',a:'Sell price minus buy price.'},{q:'Include fees?',a:'Yes, for accuracy.'},{q:'Tax on profits?',a:'Capital gains tax.'}] },
            { intro: 'Know your stock trade returns.', explanation: 'Net profit after costs.', tips: 'Track every trade.', faqs: [{q:'What is lot size?',a:'Number of shares per lot.'},{q:'Long vs short?',a:'Buy vs sell first.'},{q:'Dividends counted?',a:'Separate from capital gains.'}] },
            { intro: 'Accurate stock profit calculation.', explanation: 'Total return computation.', tips: 'Compare against benchmark.', faqs: [{q:'What is ROI?',a:'Return on investment.'},{q:'Stop loss?',a:'Limit losses.'},{q:'Holding period?',a:'Affects tax rate.'}] }
        ],
        'crypto-profit': [
            { intro: 'Calculate cryptocurrency trading profits.', explanation: '(Sell - Buy) × quantity.', tips: 'Include exchange fees.', faqs: [{q:'How is crypto profit calculated?',a:'Sell price minus buy price.'},{q:'Include fees?',a:'Yes, exchange fees.'},{q:'Tax on crypto?',a:'Depends on country.'}] },
            { intro: 'Track your crypto investments.', explanation: 'Net profit computation.', tips: 'Keep detailed records.', faqs: [{q:'What is HODL?',a:'Hold long-term.'},{q:'Volatility risk?',a:'Crypto is very volatile.'},{q:'Which coins?',a:'Research before buying.'}] },
            { intro: 'Know your crypto returns.', explanation: 'Profit after all costs.', tips: 'Diversify portfolio.', faqs: [{q:'What is altcoin?',a:'Any coin besides Bitcoin.'},{q:'Staking rewards?',a:'Additional returns.'},{q:'Secure storage?',a:'Hardware wallets.'}] }
        ],
        'retirement': [
            { intro: 'Plan for a comfortable retirement.', explanation: 'FV of contributions calculation.', tips: 'Start saving early.', faqs: [{q:'How much needed?',a:'25x annual expenses.'},{q:'When to start?',a:'As early as possible.'},{q:'Account types?',a:'401k, IRA.'}] },
            { intro: 'Calculate your retirement corpus.', explanation: 'Compound growth projection.', tips: 'Maximize employer match.', faqs: [{q:'Safe withdrawal rate?',a:'4% rule.'},{q:'Catch-up contributions?',a:'Extra after 50.'},{q:'Inflation impact?',a:'Reduces purchasing power.'}] },
            { intro: 'Build your retirement fund today.', explanation: 'Long-term growth simulation.', tips: 'Diversify investments.', faqs: [{q:'Early retirement?',a:'FIRE movement.'},{q:'Social security?',a:'Supplement, not primary.'},{q:'How to start?',a:'Open IRA today.'}] }
        ],
        'inflation': [
            { intro: 'Understand the impact of inflation.', explanation: 'FV = PV × (1+i)^n.', tips: 'Invest to beat inflation.', faqs: [{q:'What is inflation?',a:'Rising prices over time.'},{q:'Typical rate?',a:'2-3% annually.'},{q:'How to protect?',a:'Stocks, real estate.'}] },
            { intro: 'See how inflation affects money.', explanation: 'Purchasing power reduction.', tips: 'Aim for returns above inflation.', faqs: [{q:'Historical inflation?',a:'Varies by country.'},{q:'Inflation vs deflation?',a:'Opposite effects.'},{q:'Wage inflation?',a:'Salary increases.'}] },
            { intro: 'Plan for future price increases.', explanation: 'Cost projection calculation.', tips: 'Include inflation in planning.', faqs: [{q:'CPI meaning?',a:'Consumer Price Index.'},{q:'Hyperinflation?',a:'Extreme rapid inflation.'},{q:'Hedge against inflation?',a:'Gold, real estate.'}] }
        ],
        'investment-growth': [
            { intro: 'Project your investment growth.', explanation: 'Compound growth simulation.', tips: 'Reinvest all earnings.', faqs: [{q:'How fast can money grow?',a:'Depends on rate and time.'},{q:'Best growth assets?',a:'Stocks long-term.'},{q:'Compounding frequency?',a:'More is better.'}] },
            { intro: 'See your money multiply over time.', explanation: 'Future value projection.', tips: 'Stay invested long-term.', faqs: [{q:'Market crashes?',a:'Temporary dips.'},{q:'Dollar-cost averaging?',a:'Reduces risk.'},{q:'Rebalance?',a:'Maintain allocation.'}] },
            { intro: 'Grow your wealth systematically.', explanation: 'Investment return calculator.', tips: 'Automate contributions.', faqs: [{q:'Index funds?',a:'Low-cost diversification.'},{q:'Risk tolerance?',a:'Personal choice.'},{q:'Time horizon?',a:'Longer = safer.'}] }
        ],
        'dividend-calculator': [
            { intro: 'Calculate dividend income.', explanation: 'Dividend per share × shares.', tips: 'Reinvest dividends.', faqs: [{q:'What is dividend yield?',a:'Annual dividend / price.'},{q:'Frequency?',a:'Quarterly typically.'},{q:'Reinvest?',a:'DRIP programs.'}] },
            { intro: 'Know your passive income.', explanation: 'Dividend payment calculation.', tips: 'Focus on dividend growth.', faqs: [{q:'Qualified dividends?',a:'Lower tax rate.'},{q:'Dividend aristocrats?',a:'25+ years increases.'},{q:'Yield trap?',a:'High yield unsustainable.'}] },
            { intro: 'Build dividend income stream.', explanation: 'Annual income projection.', tips: 'Diversify dividend stocks.', faqs: [{q:'Payout ratio?',a:'Dividends / earnings.'},{q:'Ex-dividend date?',a:'Must own before.'},{q:'Tax on dividends?',a:'Income or qualified rate.'}] }
        ],
        'gst-calculator': [
            { intro: 'Calculate GST quickly.', explanation: 'Similar to VAT calculation.', tips: 'Use correct GST rate.', faqs: [{q:'What is GST?',a:'Goods and Services Tax.'},{q:'GST vs VAT?',a:'Similar concept.'},{q:'GST rates?',a:'Varies by country.'}] },
            { intro: 'Simple GST computation.', explanation: 'Add or extract GST.', tips: 'Keep records for filing.', faqs: [{q:'GST exempt items?',a:'Essentials in many countries.'},{q:'Claim input credit?',a:'Businesses can.'},{q:'GST invoice?',a:'Required for businesses.'}] },
            { intro: 'Accurate GST calculations.', explanation: 'Net and gross conversion.', tips: 'Check state GST rates.', faqs: [{q:'CGST vs SGST?',a:'Central vs state.'},{q:'IGST?',a:'Interstate transactions.'},{q:'GST filing?',a:'Monthly or quarterly.'}] }
        ],
        'discount-calculator': [
            { intro: 'Calculate discounts instantly.', explanation: 'Price × (1 - discount%).', tips: 'Compare final prices.', faqs: [{q:'How to calculate discount?',a:'Original × discount%.'},{q:'Stacked discounts?',a:'Apply sequentially.'},{q:'Best deals?',a:'Compare final price.'}] },
            { intro: 'Know your savings on sales.', explanation: 'Discount amount and final price.', tips: 'Check if discount is worth it.', faqs: [{q:'Percentage off?',a:'Discount / original × 100.'},{q:'Sale price?',a:'Original - discount.'},{q:'Bulk discount?',a:'Volume pricing.'}] },
            { intro: 'Smart shopping with discount calculator.', explanation: 'Quick price comparison.', tips: 'Do not buy just because it is on sale.', faqs: [{q:'Discount vs rebate?',a:'Rebate is after purchase.'},{q:'Coupon stacking?',a:'Check store policy.'},{q:'Price match?',a:'Many stores offer.'}] }
        ],
        'tip-calculator': [
            { intro: 'Calculate restaurant tips easily.', explanation: 'Bill × tip percentage.', tips: 'Tip based on service quality.', faqs: [{q:'Standard tip?',a:'15-20% in US.'},{q:'Tip on tax?',a:'Tip on pre-tax amount.'},{q:'Split bill?',a:'Divide total including tip.'}] },
            { intro: 'Know how much to tip.', explanation: 'Tip amount and total bill.', tips: 'Consider service quality.', faqs: [{q:'Tip for delivery?',a:'10-15%.'},{q:'Tip for large groups?',a:'Auto-gratuity may apply.'},{q:'No tip countries?',a:'Included in service charge.'}] },
            { intro: 'Quick tip calculation for dining.', explanation: 'Per-person split calculation.', tips: 'Round up for simplicity.', faqs: [{q:'Tip with card?',a:'Added to card payment.'},{q:'Cash tip?',a:'Preferred by servers.'},{q:'Holiday tips?',a:'Extra generous.'}] }
        ],
        'percentage': [
            { intro: 'Calculate any percentage instantly.', explanation: 'Basic percentage formulas.', tips: 'Understand percentage changes.', faqs: [{q:'Percentage formula?',a:'(Part / Whole) × 100.'},{q:'Percentage increase?',a:'(New - Old) / Old × 100.'},{q:'Reverse percentage?',a:'Work backwards.'}] },
            { intro: 'Quick percentage computations.', explanation: 'Multiple percentage calculations.', tips: 'Check your math.', faqs: [{q:'What is 10%?',a:'Move decimal one place.'},{q:'1% trick?',a:'Divide by 100.'},{q:'Percentage points?',a:'Absolute difference.'}] },
            { intro: 'Master percentage calculations.', explanation: 'All percentage formulas in one tool.', tips: 'Use for discounts, taxes, tips.', faqs: [{q:'Fraction to percentage?',a:'Multiply by 100.'},{q:'Decimal to percentage?',a:'Move decimal 2 places.'},{q:'Compound percentage?',a:'Apply sequentially.'}] }
        ],
        'profit-margin': [
            { intro: 'Calculate your profit margins.', explanation: '(Profit / Revenue) × 100.', tips: 'Track margins regularly.', faqs: [{q:'Gross vs net margin?',a:'Before vs after all costs.'},{q:'Good margin?',a:'Varies by industry.'},{q:'Improve margin?',a:'Cut costs or raise prices.'}] },
            { intro: 'Know your business profitability.', explanation: 'Margin percentage calculation.', tips: 'Compare industry benchmarks.', faqs: [{q:'Margin vs markup?',a:'Margin is % of selling price.'},{q:'Negative margin?',a:'Losing money.'},{q:'Break-even margin?',a:'Covers all costs.'}] },
            { intro: 'Monitor your business health.', explanation: 'Profit margin analysis.', tips: 'Review quarterly.', faqs: [{q:'Net profit margin?',a:'Bottom line profit.'},{q:'Operating margin?',a:'Excludes taxes.'},{q:'Industry average?',a:'Research your sector.'}] }
        ],
        'markup-calculator': [
            { intro: 'Calculate product markup pricing.', explanation: 'Cost × (1 + markup%).', tips: 'Consider market rates.', faqs: [{q:'Markup vs margin?',a:'Markup on cost, margin on price.'},{q:'Standard markup?',a:'Varies by industry.'},{q:'Too high markup?',a:'Customers may go elsewhere.'}] },
            { intro: 'Price your products correctly.', explanation: 'Cost plus markup calculation.', tips: 'Factor in all costs.', faqs: [{q:'Keystone pricing?',a:'Double the cost.'},{q:'Competitive pricing?',a:'Match competitors.'},{q:'Value pricing?',a:'Based on perceived value.'}] },
            { intro: 'Set profitable product prices.', explanation: 'Markup percentage computation.', tips: 'Test different price points.', faqs: [{q:'Wholesale vs retail?',a:'Different markups.'},{q:'Seasonal pricing?',a:'Adjust for demand.'},{q:'Discount from markup?',a:'Reduces profit.'}] }
        ],
        'roi-calculator': [
            { intro: 'Calculate Return on Investment.', explanation: '(Profit / Investment) × 100.', tips: 'Compare investment options.', faqs: [{q:'What is good ROI?',a:'Above 10% annual.'},{q:'ROI negative?',a:'Loss on investment.'},{q:'Annualized ROI?',a:'Per year calculation.'}] },
            { intro: 'Measure your investment performance.', explanation: 'ROI percentage computation.', tips: 'Include all costs.', faqs: [{q:'ROI vs IRR?',a:'IRR accounts for time.'},{q:'Real estate ROI?',a:'Include rental income.'},{q:'Stock ROI?',a:'Price appreciation + dividends.'}] },
            { intro: 'Evaluate investment returns.', explanation: 'Simple ROI formula.', tips: 'Track performance over time.', faqs: [{q:'ROI time period?',a:'Any period.'},{q:'Risk-adjusted return?',a:'Consider volatility.'},{q:'Benchmark comparison?',a:'Compare to index.'}] }
        ],
        'break-even': [
            { intro: 'Find your break-even point.', explanation: 'Fixed cost / (Price - Variable).', tips: 'Reduce fixed costs.', faqs: [{q:'Break-even meaning?',a:'No profit, no loss.'},{q:'Units or revenue?',a:'Both can be calculated.'},{q:'Lower break-even?',a:'Better business safety.'}] },
            { intro: 'Know when you start making profit.', explanation: 'Cost-volume-profit analysis.', tips: 'Monitor variable costs.', faqs: [{q:'Fixed vs variable?',a:'Rent vs materials.'},{q:'Contribution margin?',a:'Price minus variable cost.'},{q:'Safety margin?',a:'Sales above break-even.'}] },
            { intro: 'Plan your path to profitability.', explanation: 'Break-even calculation.', tips: 'Review pricing strategy.', faqs: [{q:'Multiple products?',a:'Weighted average.'},{q:'Seasonal business?',a:'Annual calculation.'},{q:'Startup break-even?',a:'Can take years.'}] }
        ],
        'salary-hourly': [
            { intro: 'Convert salary to hourly rate.', explanation: 'Salary / (hours × weeks).', tips: 'Include benefits in comparison.', faqs: [{q:'Full-time hours?',a:'40 hours/week.'},{q:'Overtime included?',a:'No, base rate only.'},{q:'Contractor rate?',a:'Higher for no benefits.'}] },
            { intro: 'Know your effective hourly wage.', explanation: 'Annual to hourly conversion.', tips: 'Factor in commute time.', faqs: [{q:'Holidays?',a:'Paid time off.'},{q:'Part-time?',a:'Prorate salary.'},{q:'Benefits value?',a:'Add to total comp.'}] },
            { intro: 'Compare job offers effectively.', explanation: 'Salary to hourly breakdown.', tips: 'Consider total package.', faqs: [{q:'Gross vs net?',a:'Before vs after tax.'},{q:'Bonus included?',a:'Separate calculation.'},{q:'Contract work?',a:'Higher hourly rate.'}] }
        ],
        'hourly-salary': [
            { intro: 'Convert hourly to annual salary.', explanation: 'Rate × hours × weeks.', tips: 'Consider overtime potential.', faqs: [{q:'Standard work year?',a:'2080 hours.'},{q:'Part-time?',a:'Prorate hours.'},{q:'Overtime rate?',a:'1.5x typically.'}] },
            { intro: 'Know your annual income.', explanation: 'Hourly to yearly conversion.', tips: 'Negotiate based on annual.', faqs: [{q:'Paid holidays?',a:'Include in calculation.'},{q:'Shift differential?',a:'Extra pay for odd hours.'},{q:'Freelance rate?',a:'Higher for flexibility.'}] },
            { intro: 'Plan your annual budget.', explanation: 'Annual income projection.', tips: 'Account for unpaid time.', faqs: [{q:'Benefits worth?',a:'20-30% of salary.'},{q:'Raises?',a:'Negotiate annually.'},{q:'Multiple jobs?',a:'Combine incomes.'}] }
        ],
        'overtime': [
            { intro: 'Calculate overtime pay.', explanation: 'Rate × 1.5 × overtime hours.', tips: 'Know your overtime rights.', faqs: [{q:'Overtime rate?',a:'1.5x standard.'},{q:'When does overtime start?',a:'After 40 hours/week.'},{q:'Double time?',a:'Holidays in some jobs.'}] },
            { intro: 'Know your extra earnings.', explanation: 'Overtime compensation calculation.', tips: 'Track hours accurately.', faqs: [{q:'Salaried employees?',a:'May be exempt.'},{q:'Weekly overtime?',a:'After 40 hours.'},{q:'Daily overtime?',a:'Some states require.'}] },
            { intro: 'Maximize your take-home pay.', explanation: 'Overtime pay computation.', tips: 'Volunteer for extra shifts.', faqs: [{q:'Overtime tax?',a:'Taxed as income.'},{q:'Flex time?',a:'Alternative to overtime.'},{q:'Holiday pay?',a:'2x or 2.5x rate.'}] }
        ],
        'budget-planner': [
            { intro: 'Create a simple budget plan.', explanation: 'Income minus expenses.', tips: 'Track every expense.', faqs: [{q:'50/30/20 rule?',a:'Needs/wants/savings.'},{q:'Emergency fund?',a:'3-6 months expenses.'},{q:'Budget apps?',a:'Many free options.'}] },
            { intro: 'Take control of your spending.', explanation: 'Monthly budget calculation.', tips: 'Review spending weekly.', faqs: [{q:'Fixed vs variable?',a:'Rent vs dining.'},{q:'Save first?',a:'Pay yourself first.'},{q:'Debt in budget?',a:'Include payments.'}] },
            { intro: 'Plan your financial future.', explanation: 'Income and expense tracking.', tips: 'Adjust monthly as needed.', faqs: [{q:'Zero-based budget?',a:'Every dollar assigned.'},{q:'Envelope method?',a:'Cash for categories.'},{q:'Irregular income?',a:'Base on average.'}] }
        ]
    }
};

// ===== CONFIG =====
const CONFIG = (function() {
    const basePath = '/site/tools/03/';
    
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    
    let subdomain = '';
    let domain = '';
    let tld = '';
    
    if (parts.length >= 3) {
        subdomain = parts[0];
        domain = parts[1];
        tld = parts.slice(2).join('.');
    } else if (parts.length === 2) {
        domain = parts[0];
        tld = parts[1];
    } else {
        domain = parts[0];
    }
    
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || 
                    hostname.startsWith('192.168.') || hostname.startsWith('10.');
    
    const hash = hostname.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    
    function generateSiteName() {
        if (isLocal) return 'FinanceTools';
        if (subdomain && subdomain !== 'www') {
            return subdomain.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
        if (domain) {
            return domain.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        }
        return 'FinanceTools';
    }
    
    function getContent(library, key) {
        const items = library[key];
        if (!items) return null;
        if (Array.isArray(items)) return items[hash % items.length];
        return items;
    }
    
    function generateColors() {
        const palettes = [
            { primary: '#6366f1', primaryDark: '#4f46e5', secondary: '#8b5cf6' },
            { primary: '#0ea5e9', primaryDark: '#0284c7', secondary: '#38bdf8' },
            { primary: '#10b981', primaryDark: '#059669', secondary: '#34d399' },
            { primary: '#f59e0b', primaryDark: '#d97706', secondary: '#fbbf24' },
            { primary: '#f97316', primaryDark: '#ea580c', secondary: '#fb923c' },
            { primary: '#ec4899', primaryDark: '#db2777', secondary: '#f472b6' },
            { primary: '#14b8a6', primaryDark: '#0d9488', secondary: '#2dd4bf' },
            { primary: '#8b5cf6', primaryDark: '#7c3aed', secondary: '#a78bfa' }
        ];
        return palettes[hash % palettes.length];
    }
    
    function generateLogo() {
        const logos = [ICONS.calculator, ICONS.dollar, ICONS.chart, ICONS.wallet, ICONS.coin];
        return logos[hash % logos.length];
    }
    
    const siteName = generateSiteName();
    const colors = generateColors();
    
    return {
        siteName: siteName,
        tagline: getContent(CONTENT_LIBRARY, 'heroTitles') || 'Finance Tools',
        description: getContent(CONTENT_LIBRARY, 'heroSubtitles') || 'Free financial calculators',
        logoIcon: generateLogo(),
        colors: colors,
        basePath: basePath,
        isLocal: isLocal,
        hostname: hostname,
        icons: ICONS,
        contentLibrary: CONTENT_LIBRARY,
        
        contact: {
            whatsapp: '+6285770366055',
            whatsappLink: 'https://wa.me/6285770366055',
            email: 'r.fazriansyah@gmail.com',
            emailLink: 'mailto:r.fazriansyah@gmail.com'
        },
        
        adsense: {
            enabled: false,
            clientId: '',
            slots: { header: '', content: '', footer: '' }
        },
        
        categories: [
            { id: 'loan', name: 'Loan', icon: ICONS.loan, file: 'category-loan.html' },
            { id: 'investment', name: 'Investment', icon: ICONS.investment, file: 'category-investment.html' },
            { id: 'tax', name: 'Tax', icon: ICONS.tax, file: 'category-tax.html' },
            { id: 'utility', name: 'Utility', icon: ICONS.utility, file: 'category-utility.html' }
        ],
        
        tools: [
            // Loan (8)
            { id: 'loan-calculator', name: 'Loan Calculator', icon: ICONS.calculator, file: 'loan/loan-calculator.html', description: 'Calculate monthly loan payments', category: 'loan' },
            { id: 'mortgage-calculator', name: 'Mortgage Calculator', icon: ICONS.calculator, file: 'loan/mortgage-calculator.html', description: 'Estimate home loan payments', category: 'loan' },
            { id: 'emi-calculator', name: 'EMI Calculator', icon: ICONS.calculator, file: 'loan/emi-calculator.html', description: 'Calculate monthly installments', category: 'loan' },
            { id: 'simple-interest', name: 'Simple Interest', icon: ICONS.dollar, file: 'loan/simple-interest.html', description: 'Calculate simple interest', category: 'loan' },
            { id: 'compound-interest', name: 'Compound Interest', icon: ICONS.chart, file: 'loan/compound-interest.html', description: 'Calculate compound growth', category: 'loan' },
            { id: 'amortization', name: 'Amortization Schedule', icon: ICONS.chart, file: 'loan/amortization.html', description: 'Loan payment breakdown', category: 'loan' },
            { id: 'debt-payoff', name: 'Debt Payoff', icon: ICONS.wallet, file: 'loan/debt-payoff.html', description: 'Plan debt repayment', category: 'loan' },
            { id: 'loan-comparison', name: 'Loan Comparison', icon: ICONS.calculator, file: 'loan/loan-comparison.html', description: 'Compare loan offers', category: 'loan' },
            
            // Investment (8)
            { id: 'sip-calculator', name: 'SIP Calculator', icon: ICONS.chart, file: 'investment/sip-calculator.html', description: 'Regular investment growth', category: 'investment' },
            { id: 'lumpsum-investment', name: 'Lumpsum Investment', icon: ICONS.dollar, file: 'investment/lumpsum-investment.html', description: 'One-time investment returns', category: 'investment' },
            { id: 'stock-profit', name: 'Stock Profit', icon: ICONS.chart, file: 'investment/stock-profit.html', description: 'Stock trading profits', category: 'investment' },
            { id: 'crypto-profit', name: 'Crypto Profit', icon: ICONS.coin, file: 'investment/crypto-profit.html', description: 'Crypto trading profits', category: 'investment' },
            { id: 'retirement', name: 'Retirement Calculator', icon: ICONS.wallet, file: 'investment/retirement.html', description: 'Plan retirement savings', category: 'investment' },
            { id: 'inflation', name: 'Inflation Calculator', icon: ICONS.chart, file: 'investment/inflation.html', description: 'Inflation impact', category: 'investment' },
            { id: 'investment-growth', name: 'Investment Growth', icon: ICONS.chart, file: 'investment/investment-growth.html', description: 'Project investment growth', category: 'investment' },
            { id: 'dividend-calculator', name: 'Dividend Calculator', icon: ICONS.dollar, file: 'investment/dividend-calculator.html', description: 'Dividend income', category: 'investment' },
            
            // Tax (7)
            { id: 'vat-calculator', name: 'VAT Calculator', icon: ICONS.tax, file: 'tax/vat-calculator.html', description: 'Add or extract VAT', category: 'tax' },
            { id: 'gst-calculator', name: 'GST Calculator', icon: ICONS.tax, file: 'tax/gst-calculator.html', description: 'Calculate GST', category: 'tax' },
            { id: 'discount-calculator', name: 'Discount Calculator', icon: ICONS.tax, file: 'tax/discount-calculator.html', description: 'Calculate discounts', category: 'tax' },
            { id: 'tip-calculator', name: 'Tip Calculator', icon: ICONS.dollar, file: 'tax/tip-calculator.html', description: 'Restaurant tip calculator', category: 'tax' },
            { id: 'percentage', name: 'Percentage Calculator', icon: ICONS.calculator, file: 'tax/percentage.html', description: 'Any percentage calculation', category: 'tax' },
            { id: 'profit-margin', name: 'Profit Margin', icon: ICONS.chart, file: 'tax/profit-margin.html', description: 'Business profitability', category: 'tax' },
            { id: 'markup-calculator', name: 'Markup Calculator', icon: ICONS.calculator, file: 'tax/markup-calculator.html', description: 'Product markup pricing', category: 'tax' },
            
            // Utility (7)
            { id: 'currency-converter', name: 'Currency Converter', icon: ICONS.dollar, file: 'utility/currency-converter.html', description: 'Manual rate conversion', category: 'utility' },
            { id: 'roi-calculator', name: 'ROI Calculator', icon: ICONS.chart, file: 'utility/roi-calculator.html', description: 'Return on investment', category: 'utility' },
            { id: 'break-even', name: 'Break-even Calculator', icon: ICONS.calculator, file: 'utility/break-even.html', description: 'Business break-even point', category: 'utility' },
            { id: 'salary-hourly', name: 'Salary to Hourly', icon: ICONS.wallet, file: 'utility/salary-hourly.html', description: 'Convert salary to hourly', category: 'utility' },
            { id: 'hourly-salary', name: 'Hourly to Salary', icon: ICONS.wallet, file: 'utility/hourly-salary.html', description: 'Convert hourly to salary', category: 'utility' },
            { id: 'overtime', name: 'Overtime Calculator', icon: ICONS.dollar, file: 'utility/overtime.html', description: 'Overtime pay calculation', category: 'utility' },
            { id: 'budget-planner', name: 'Budget Planner', icon: ICONS.wallet, file: 'utility/budget-planner.html', description: 'Monthly budget planning', category: 'utility' }
        ],
        
        navigation: [
            { name: 'Home', file: 'index.html', icon: ICONS.home },
            { name: 'About', file: 'about.html', icon: ICONS.about },
            { name: 'Contact', file: 'contact.html', icon: ICONS.contact }
        ],
        
        footerLinks: [
            { name: 'About', file: 'about.html' },
            { name: 'Contact', file: 'contact.html' },
            { name: 'Privacy Policy', file: 'privacy-policy.html' }
        ]
    };
})();

// ============================================
// HELPER FUNCTIONS
// ============================================

function applyColors() {
    const root = document.documentElement;
    if (CONFIG.colors) {
        if (CONFIG.colors.primary) root.style.setProperty('--primary', CONFIG.colors.primary);
        if (CONFIG.colors.primaryDark) root.style.setProperty('--primary-dark', CONFIG.colors.primaryDark);
        if (CONFIG.colors.secondary) root.style.setProperty('--secondary', CONFIG.colors.secondary);
    }
}

function renderHeader() {
    const navLinks = CONFIG.navigation.map(link => 
        `<a href="${CONFIG.basePath}${link.file}">
            <span class="nav-icon">${link.icon}</span>
            <span>${link.name}</span>
        </a>`
    ).join('');
    
    return `
        <header>
            <div class="header-container">
                <a href="${CONFIG.basePath}index.html" class="logo">
                    <div class="logo-icon">${CONFIG.logoIcon}</div>
                    <span>${CONFIG.siteName}</span>
                </a>
                <nav>${navLinks}</nav>
            </div>
        </header>
    `;
}

function renderBreadcrumb(pageName) {
    return `
        <div class="breadcrumb">
            <a href="${CONFIG.basePath}index.html">Home</a>
            <span>/</span>
            <span>${pageName}</span>
        </div>
    `;
}

function renderCategoryTabs(activeId = null) {
    return `
        <div class="category-tabs">
            ${CONFIG.categories.map(cat => `
                <a href="${CONFIG.basePath}${cat.file}" class="category-tab ${cat.id === activeId ? 'active' : ''}">
                    ${cat.icon}
                    <span>${cat.name}</span>
                </a>
            `).join('')}
        </div>
    `;
}

function renderCategoryCards() {
    return CONFIG.categories.map(cat => {
        const count = CONFIG.tools.filter(t => t.category === cat.id).length;
        return `
            <a href="${CONFIG.basePath}${cat.file}" class="category-card">
                <div class="category-icon">${cat.icon}</div>
                <h3>${cat.name}</h3>
                <p>${count} tools</p>
            </a>
        `;
    }).join('');
}

function renderToolCards(categoryId = null) {
    let tools = CONFIG.tools;
    if (categoryId) {
        tools = tools.filter(t => t.category === categoryId);
    }
    
    return tools.map(tool => `
        <a href="${CONFIG.basePath}${tool.file}" class="tool-card">
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-info">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
            </div>
        </a>
    `).join('');
}

function renderRelatedTools(currentId) {
    const currentTool = CONFIG.tools.find(t => t.id === currentId);
    if (!currentTool) return '';
    
    const related = CONFIG.tools.filter(t => t.category === currentTool.category && t.id !== currentId).slice(0, 4);
    
    return related.map(tool => `
        <a href="${CONFIG.basePath}${tool.file}" class="related-tool">
            <span>${tool.icon}</span>
            <span>${tool.name}</span>
        </a>
    `).join('');
}

function getToolContent(toolId) {
    const hash = CONFIG.hostname.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    const items = CONFIG.contentLibrary.toolContent[toolId];
    if (!items) return null;
    return items[hash % items.length];
}

function renderToolContent(toolId) {
    const content = getToolContent(toolId);
    if (!content) return '';
    
    const introEl = document.getElementById('toolIntro');
    if (introEl) introEl.textContent = content.intro;
    
    const explanationEl = document.getElementById('toolExplanation');
    if (explanationEl) {
        explanationEl.innerHTML = `<h2>How It Works</h2><p>${content.explanation}</p>`;
    }
    
    const tipsEl = document.getElementById('toolTips');
    if (tipsEl) {
        tipsEl.innerHTML = `<h2>Tips</h2><p>${content.tips}</p>`;
    }
    
    const faqEl = document.getElementById('toolFAQ');
    if (faqEl) {
        faqEl.innerHTML = `
            <h2>Frequently Asked Questions</h2>
            ${content.faqs.map(faq => `
                <div class="faq-item">
                    <h3>${faq.q}</h3>
                    <p>${faq.a}</p>
                </div>
            `).join('')}
        `;
    }
}

function renderAdsense(slotName) {
    if (!CONFIG.adsense.enabled || !CONFIG.adsense.clientId) return '';
    const slot = CONFIG.adsense.slots[slotName];
    if (!slot) return '';
    
    return `
        <div class="ad-container">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="${CONFIG.adsense.clientId}"
                 data-ad-slot="${slot}"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
    `;
}

function setPageTitle(pageName) {
    document.title = `${pageName} | ${CONFIG.siteName}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && pageName !== 'Dashboard') {
        metaDesc.content = `${pageName} - ${CONFIG.tagline}. ${CONFIG.description}`;
    }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    applyColors();
    
    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.innerHTML = renderHeader();
    
    const breadcrumbEl = document.getElementById('breadcrumb');
    const pageName = document.body.getAttribute('data-page-name');
    if (breadcrumbEl && pageName) breadcrumbEl.innerHTML = renderBreadcrumb(pageName);
    
    const tabsEl = document.getElementById('category-tabs');
    const activeCategory = document.body.getAttribute('data-category');
    if (tabsEl) tabsEl.innerHTML = renderCategoryTabs(activeCategory);
    
    const toolsGrid = document.getElementById('tools-grid');
    const category = document.body.getAttribute('data-category');
    if (toolsGrid) toolsGrid.innerHTML = renderToolCards(category);
    
    const categoryGrid = document.getElementById('category-grid');
    if (categoryGrid) categoryGrid.innerHTML = renderCategoryCards();
    
    const relatedEl = document.getElementById('related-tools');
    const currentId = document.body.getAttribute('data-tool-id');
    if (relatedEl && currentId) relatedEl.innerHTML = renderRelatedTools(currentId);
    
    if (currentId) renderToolContent(currentId);
    
    if (pageName) setPageTitle(pageName);
    
    const adHeader = document.getElementById('ad-header');
    if (adHeader) adHeader.innerHTML = renderAdsense('header');
    
    const adContent = document.getElementById('ad-content');
    if (adContent) adContent.innerHTML = renderAdsense('content');
    
    const adFooter = document.getElementById('ad-footer');
    if (adFooter) adFooter.innerHTML = renderAdsense('footer');
});