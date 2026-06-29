import pickAndMix from '../assets/Pick and Mix.png'
import payment from '../assets/Payment.png'

export const commercialScreens = [
  {
    id: 'pick-and-mix',
    src: pickAndMix,
    alt: 'Quote builder: pick and mix cover selection',
    label: '01. Quote Builder',
    annotations: [
      {
        step: '01',
        heading: 'Basket as navigation hub',
        body: 'The basket component started as a standard order summary. As the quote page grew in complexity, with covers having nested location detail, variable limits and excesses across multiple sections, it became clear it needed to do more. We evolved it into the primary navigation component for the quote: a persistent right-hand panel showing what had been added, what was incomplete, and how the total was building. Users could move between cover sections from the basket rather than relying on linear progression through the flow.',
      },
      {
        step: '02',
        heading: 'Nested detail without losing context',
        body: 'Office Protect and Media Property covers required users to add and configure individual locations, each with its own address, occupancy type, sum insured, and excess. This created a deep drill-down within an already complex screen. The design challenge was keeping users oriented while they were inside that detail: they needed to know where they were in the overall quote without losing their place. The persistent basket provided the anchor point throughout.',
      },
      {
        step: '03',
        heading: 'One flow, two mental models',
        body: 'Broker agents pricing a risk and direct customers buying their own cover land on the same screen, but the differences run deeper than experience level. Brokers can refer a quote to an underwriter when it falls outside standard acceptance criteria, and can apply commission reductions; direct customers cannot, and face stricter limits on the covers available to them. A broker works through a known product efficiently; a customer is navigating an unfamiliar one for the first time. Rather than bifurcating the journey, conditional field visibility and contextual guidance serve both without branching the flow.',
      },
    ],
  },
  {
    id: 'payment',
    src: payment,
    alt: 'Payment: selecting payment method and confirming the policy',
    label: '02. Payment',
    annotations: [
      {
        step: '01',
        heading: 'Flexibility at the point of commitment',
        body: 'Annual and instalment payment options are presented at the final step, with the flow adapting for brokers paying on behalf of clients versus customers self-serving. Both paths resolve to the same confirmation without requiring separate journeys, with the distinction handled through conditional field visibility rather than branching screens.',
      },
      {
        step: '02',
        heading: 'Pre-sale disclosure, handled inline',
        body: 'Policy documents surface at the payment stage before the user commits, satisfying FCA pre-sale disclosure requirements without redirecting users to a separate document portal. Compliance is embedded in the flow, not bolted on after the fact.',
      },
    ],
  },
]
