You are acting as a **senior product designer, UX/UI auditor, frontend engineer, and code reviewer**. Your task is to perform a **deep, evidence-based audit of my website/page**, using both the live browser experience and the actual source code.

This is **not** a surface-level review. Do not give generic advice such as “improve the UI,” “make it responsive,” or “add better UX” without explaining exactly what is wrong, why it matters, and what should be changed.

## 1. First: Inspect the Website in the Browser

Open and inspect the target page in the browser as a real user would.

Spend enough time navigating and examining the page rather than judging it from the first viewport.

Analyze **the entire page from top to bottom**, including:

- Header / navbar
- Logo and branding
- Navigation
- Hero section
- Search functionality
- CTA buttons
- Forms and inputs
- Filters
- Cards
- Images and media
- Property/product/content sections
- Feature sections
- Statistics
- Testimonials
- Trust indicators
- FAQ sections
- Blog/content sections
- Footer
- Modals, dropdowns, popovers, menus
- Empty states
- Loading states
- Error states
- Hover states where possible
- Interactive elements
- Mobile navigation
- Any dynamically loaded sections
- Any section that appears only after interaction or scrolling

Do not assume that a section is correct simply because it technically works.

Evaluate the **actual visual hierarchy, spacing, typography, alignment, consistency, density, usability, hierarchy, information architecture, and overall product quality**.

### Check multiple viewport sizes

Inspect the page at minimum:

- Desktop
- Tablet
- Mobile

Look specifically for responsive problems such as:

- Overflow
- Broken layouts
- Excessive whitespace
- Compressed elements
- Incorrect stacking
- Bad typography scaling
- Buttons becoming difficult to use
- Navigation problems
- Cards breaking
- Images being cropped incorrectly
- Sections becoming visually unbalanced
- Touch-target problems
- Content disappearing unexpectedly

## 2. Build a Complete Visual Inventory

Before making recommendations, create a structured inventory of what currently exists.

For every major section, document:

**Section name → purpose → visual structure → content → CTA/actions → UX behavior → strengths → weaknesses → problems**

Do this for **every meaningful section**, not only the obvious ones.

Also identify:

- Repeated UI patterns
- Inconsistent UI patterns
- Components that appear visually outdated
- Components that appear unnecessary
- Components that are missing
- Sections that feel disconnected from the rest of the product
- Sections that appear copied, generic, or template-like
- Areas that do not communicate the product's value clearly

## 3. Understand the Product Before Judging It

Determine what type of product/website this is based on its actual implementation and content.

Understand:

- Target users
- Primary user intent
- Core business goal
- Primary conversion action
- Important secondary actions
- Main user journeys
- What users are likely trying to accomplish
- What information users need before taking action

Then judge the UI **according to the product category and user expectations**, not according to generic design principles alone.

For example, a real-estate marketplace should be evaluated differently from:

- A SaaS dashboard
- An e-commerce store
- A portfolio
- A social platform
- A booking application
- A financial product

Your recommendations must therefore be **specific to my project's actual purpose and market context**.

## 4. Then Inspect the Codebase

After completing the browser audit, inspect the relevant source code.

Review:

- React components
- Component hierarchy
- Routes
- Pages
- Reusable components
- CSS/Tailwind
- State management
- API integration
- Forms
- Validation
- Loading/error handling
- Responsive classes
- Accessibility-related implementation
- Semantic HTML
- Image handling
- Performance-sensitive code
- Unused components
- Duplicate components
- Dead code
- Inconsistent naming
- Hardcoded values
- Poor component boundaries
- Questionable frontend architecture
- Potential maintainability problems
- Missing states or edge-case handling

Do not review code purely for coding style.

Focus on problems that can affect:

- User experience
- Visual consistency
- Functionality
- Performance
- Accessibility
- Maintainability
- Scalability
- SEO
- Conversion
- Reliability

## 5. Compare Browser Result vs Source Code

This is a critical part of the task.

Compare **what the code appears intended to do** with **what the browser actually renders**.

Identify concrete discrepancies such as:

- Code exists but the UI does not show it
- UI exists but implementation is incomplete
- Design and implementation differ
- Intended spacing differs from rendered spacing
- Responsive behavior is implemented incorrectly
- Components are duplicated unnecessarily
- A feature appears visually but is functionally incomplete
- Placeholder content remains
- Existing functionality is not exposed properly in the UI
- Backend/API capabilities exist but frontend does not use them
- Frontend expects data that backend does not provide
- State exists but does not affect the UI correctly
- Routes/components exist but are inaccessible
- Buttons have no meaningful action
- Filters exist but do not behave as expected
- Data is available but poorly presented
- UI implies functionality that does not actually exist

For every discrepancy, provide **specific evidence from the code and/or browser behavior**.

## 6. Identify UX Problems

Analyze the complete user experience.

Look for:

### Navigation
- Can users easily understand where they are?
- Is navigation structured logically?
- Are important destinations easy to find?
- Are there unnecessary navigation items?

### Information hierarchy
- Is the most important information visually dominant?
- Is the page communicating its value proposition quickly?
- Are secondary details competing with primary actions?

### User flow
- Can a user complete the main task efficiently?
- Are there unnecessary steps?
- Are important actions buried?
- Are there confusing transitions?

### Forms
- Are fields understandable?
- Are defaults sensible?
- Is validation clear?
- Are error messages useful?
- Are users asked for unnecessary information?

### Search/filtering
- Are filters logically organized?
- Are users able to refine results efficiently?
- Are active filters visible?
- Is resetting filters easy?
- Does the result count/status communicate clearly?

### Trust and confidence
For a marketplace/product such as this, examine whether the page provides enough signals for users to trust the platform and listings.

Look for things such as:

- Verification indicators
- Clear ownership/source information
- Contact options
- Location transparency
- Pricing transparency
- Relevant metadata
- Social proof
- Policies
- Safety information
- Quality signals

Do not recommend trust elements blindly. Recommend only those that make sense for the product.

## 7. Evaluate Visual Design

Audit:

- Typography
- Font hierarchy
- Font weights
- Line heights
- Letter spacing
- Colors
- Contrast
- Borders
- Radius
- Shadows
- Icons
- Icon consistency
- Button styling
- Input styling
- Card styling
- Image ratios
- Spacing system
- Grid system
- Alignment
- Section rhythm
- Visual density
- Background usage
- Content width
- Page margins
- Responsive scaling

Identify **specific inconsistencies**.

Example:

Instead of:
> “Spacing needs improvement.”

Say:
> “The hero search container uses substantially larger vertical padding than the listing section, making the transition feel disconnected. Standardize the section spacing scale and reduce the hero bottom spacing.”

## 8. Evaluate UX Against Modern Product Standards

Assess whether the design feels:

- Professional
- Trustworthy
- Modern
- Consistent
- Production-ready
- Appropriate for its target users
- Competitive within its product category

Do not recommend trends merely because they are fashionable.

Prioritize **usefulness over decoration**.

Do not add animations, gradients, cards, badges, sections, or other visual elements unless they improve the actual product experience.

## 9. Identify What Should Be Removed

Explicitly identify things that should potentially be:

- Removed
- Consolidated
- Simplified
- Reordered
- Hidden behind interaction
- Replaced

For each removal recommendation, explain:

**What → Why → What problem it currently creates → What should replace it, if anything**

Be willing to recommend removing something even if it technically works.

## 10. Identify What Should Be Added

Identify missing functionality, content, UX patterns, or sections that would materially improve the product.

Examples may include:

- Missing states
- Missing contextual information
- Better search controls
- Better filters
- Comparison features
- Trust indicators
- Better onboarding
- Better feedback
- Better confirmation states
- Better empty states
- Better mobile interaction
- Missing conversion elements
- Better discovery mechanisms

However, **do not invent features simply to make the application look bigger**.

Every proposed addition must answer:

**Why does this belong in this specific product?**

## 11. Technical Review

Identify implementation problems in the frontend that could affect the current or future product.

Review for:

- Component duplication
- Unnecessary re-renders
- State-management problems
- Poor API handling
- Missing caching
- Incorrect loading states
- Incorrect error handling
- Race conditions
- Poor form state handling
- Responsive implementation weaknesses
- Accessibility problems
- SEO issues
- Performance bottlenecks
- Image optimization issues
- Code maintainability
- Scalability concerns

Distinguish between:

**Confirmed issue** — directly observable in code or browser

**Likely issue** — strong technical indication but not fully confirmed

**Recommendation** — improvement rather than a defect

Do not present speculation as fact.

## 12. Prioritize Everything

Do not give me a giant unranked list.

Categorize every finding into:

### P0 — Critical
Problems that significantly damage usability, functionality, conversion, trust, or production readiness.

### P1 — High
Important problems that should be addressed soon.

### P2 — Medium
Meaningful improvements but not immediately blocking.

### P3 — Low
Polish, optimization, or nice-to-have improvements.

Also classify each item as:

- UX
- UI
- Functionality
- Responsive
- Accessibility
- Performance
- SEO
- Architecture
- Content
- Conversion
- Trust
- Product strategy

## 13. Provide Evidence for Every Important Recommendation

For every significant issue, include:

**Issue**
  
**Evidence**
- What you observed in the browser
- Relevant code/component if applicable

**Why it matters**

**Recommended change**

**Priority**

**Estimated complexity**
- Low
- Medium
- High

Do not make recommendations without evidence.

## 14. Find Opportunities Beyond Obvious Bugs

Think like a senior product consultant.

Look for opportunities where the product could become substantially better through:

- Better information architecture
- Better conversion flow
- Better discovery
- Better mobile UX
- Better trust mechanisms
- Better personalization
- Better content hierarchy
- Better data presentation
- Better interaction design
- Better use of existing backend capabilities
- Better reuse of existing components
- Removing unnecessary complexity

Look for **high-leverage improvements**, not just cosmetic changes.

## 15. Final Output Structure

Your final report must contain:

### 1. Executive Summary
Give me the overall assessment of the page/product.

Include:

- Current quality level
- Biggest strengths
- Biggest weaknesses
- Most important risks
- Overall product-readiness assessment

### 2. Complete Page/Section Audit
Go section-by-section from top to bottom.

### 3. Browser vs Code Discrepancies
List every meaningful mismatch discovered.

### 4. UX Issues
Ranked by severity.

### 5. UI / Visual Issues
Ranked by severity.

### 6. Functional Issues
Ranked by severity.

### 7. Responsive Issues
Desktop, tablet, and mobile separately.

### 8. Accessibility Issues

### 9. Performance / Technical Issues

### 10. SEO Issues

### 11. Content / Trust / Conversion Issues

### 12. Things to Remove

### 13. Things to Add

### 14. Things to Improve
Include specific before/after recommendations.

### 15. Prioritized Master Task List

Create a practical implementation backlog with columns:

| Priority | Area | Problem | Evidence | Recommended Change | Complexity | Expected Impact |

### 16. Recommended Implementation Order

Tell me exactly what I should work on first, second, third, etc.

Optimize the order based on:

**user impact + business impact + implementation effort + dependencies**

### 17. Final Verdict

Give me a blunt assessment:

- What is already good enough
- What is holding the product back
- What absolutely needs to change
- What should not be touched unnecessarily
- What would make the biggest improvement with the least effort

## Important Rules

1. **Do not rush.** Inspect the entire experience before forming conclusions.
2. **Do not review only the first viewport.**
3. **Do not provide generic design advice.**
4. **Do not recommend changes merely because they are trendy.**
5. **Do not invent problems that cannot be supported by evidence.**
6. **Do not assume the code is correct because the UI looks correct.**
7. **Do not assume the UI is correct because the code looks clean.**
8. **Cross-check browser behavior against implementation.**
9. **Separate confirmed issues from assumptions and recommendations.**
10. **Be willing to recommend removing existing UI.**
11. **Be willing to recommend keeping something unchanged when it already works well.**
12. **Judge the product according to its actual business/category context.**
13. **Prioritize practical improvements over cosmetic perfection.**
14. **Be blunt and honest. Do not try to make the report sound positive if the product has serious problems.**
15. **Do not stop after finding the obvious issues. Continue looking for deeper structural and product-level problems.**

### Most Important Requirement

I do **not** want a generic website audit.

I want a report equivalent to what I would receive from a **senior product designer + senior frontend engineer reviewing a production application before a major release**.

Your conclusions must come from:

**Browser observation + source-code inspection + comparison between the two + understanding of the actual product.**

When you finish, I should be able to use your report as a **real implementation backlog for the next version of the product**, rather than merely as design feedback.