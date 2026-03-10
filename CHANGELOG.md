<div style="font-size: 32px; font-weight: 700; margin-bottom: 20px;">
  📜 Changelog
</div>

<div style="font-size: 24px; font-weight: 700;">[v1.4.0] — Color Quality Overhaul, Extended API Coverage & Language Expansion</div>
<br>

<div style="font-size: 18px; font-weight: 700;">Color Quality — All Themes</div>
<ul>
  <li>
    <strong>Syntax Differentiation:</strong> Resolved critical color collisions across all 6 themes. <code>types</code>, <code>classes</code>, and <code>constants</code> now use distinct colors in every theme — previously up to 3 categories shared the same hex value.
  </li>
  <li>
    <strong>Operators vs. Comments:</strong> Fixed identical colors for operators and comments in Aether Light and Aether Coffee Dark — now visually distinct and semantically clear.
  </li>
  <li>
    <strong>Emerald Variables Fix:</strong> <code>syntax.variables</code> in Aether Emerald was identical to the base foreground color, making variables invisible. Now uses a distinct pale teal (<code>#b8d4c8</code>).
  </li>
  <li>
    <strong>Dark theme Numbers:</strong> Replaced the gray/beige <code>#c2b9b9</code> with vibrant amber <code>#fbbf24</code> — consistent with industry standards and much easier to spot at a glance.
  </li>
  <li>
    <strong>WCAG AA Compliance:</strong> Aether Light operators and comments now meet the WCAG AA minimum contrast ratio (4.5:1) against the editor background.
  </li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">Theme Differentiation — Coffee & Coffee Dark</div>
<ul>
  <li>
    <strong>Aether Coffee</strong> redesigned as a "mid-afternoon café" experience: warm amber-orange accent (<code>#d4914a</code>), sage green functions, golden strings, rose numbers. Medium-dark backgrounds with clear depth.
  </li>
  <li>
    <strong>Aether Coffee Dark</strong> redesigned as "midnight espresso": ultra-dark backgrounds (near-black <code>#080706</code>), cooler golden accent (<code>#c89050</code>), teal/steel blue types and classes. The two Coffee themes are now clearly distinct.
  </li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">Aether Light — Full Rework</div>
<ul>
  <li>Warmer, more refined background palette (<code>#f5f1ed</code>) with improved UI depth.</li>
  <li>Stronger activityBar → sidebar → editor gradient (darkest to lightest).</li>
  <li>All syntax colors reworked for clarity: mauve keywords, steel-blue functions, teal/navy types vs. classes, copper numbers.</li>
  <li>Terminal colors redesigned to work naturally against light backgrounds.</li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">UI Coherence — All Themes</div>
<ul>
  <li>
    <strong>Gradient/Depth:</strong> Refined the activityBar → sidebar → editor background progression in all dark themes for a clearer visual hierarchy. Gutter and indent guides now feel more integrated with each theme's color identity.
  </li>
  <li>
    <strong>Remote indicator:</strong> Status bar remote indicator now uses each theme's primary accent color for instant recognition.
  </li>
  <li>
    <strong>Terminal:</strong> <code>terminal.black</code> now maps to the editor background (ideal for TUI apps), <code>terminal.white</code> maps to the muted foreground, and <code>terminal.brightWhite</code> maps to the full foreground — consistent across all themes.
  </li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">API Coverage — New Workbench Colors</div>
<ul>
  <li><strong>Editor:</strong> <code>editor.selectionHighlightBackground</code>, <code>editor.inactiveSelectionBackground</code></li>
  <li><strong>Hover Widget:</strong> <code>editorHoverWidget.background/foreground/border/statusBarBackground/highlightForeground</code></li>
  <li><strong>Ghost Text / Copilot:</strong> <code>editorGhostText.foreground/background/border</code></li>
  <li><strong>Sticky Scroll:</strong> <code>editorStickyScroll.shadow</code></li>
  <li><strong>Diff Editor:</strong> <code>diffEditor.insertedLineBackground</code>, <code>diffEditor.removedLineBackground</code>, <code>diffEditor.diagonalFill</code>, <code>diffEditorGutter.*</code>, <code>diffEditorOverview.*</code></li>
  <li><strong>Marker Navigation:</strong> <code>editorMarkerNavigation.background</code> + error/warning/info variants</li>
  <li><strong>Git Decorations:</strong> <code>renamed</code>, <code>untracked</code>, <code>stageModified</code>, <code>stageDeleted</code>, <code>submodule</code> resource foregrounds</li>
  <li><strong>Debug:</strong> <code>debugConsole.infoForeground/warningForeground/errorForeground/sourceForeground</code>, full <code>debugTokenExpression.*</code> suite</li>
  <li><strong>Notifications:</strong> <code>notificationCenterHeader.background/foreground</code>, <code>notificationLink.foreground</code></li>
  <li><strong>Panel:</strong> <code>panelSection.border</code>, <code>panelSection.dropBackground</code>, <code>panelSectionHeader.background/foreground</code></li>
  <li><strong>Terminal:</strong> <code>terminal.tab.activeBorder</code>, <code>terminal.findMatchBackground</code>, <code>terminal.findMatchHighlightBackground</code>, <code>terminal.inactiveSelectionBackground</code></li>
  <li><strong>AI / Inline Chat:</strong> <code>inlineChat.background/border/foreground/shadow</code>, <code>chat.requestBackground/requestBorder/slashCommandBackground/slashCommandForeground</code></li>
  <li><strong>Misc:</strong> <code>tab.dragAndDropBorder</code>, <code>keybindingTable.*</code>, <code>scm.providerBorder</code>, <code>profileBadge.*</code>, <code>ports.iconRunningProcessForeground</code>, <code>multiDiffEditor.*</code>, <code>commentsView.*</code></li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">Language Coverage — New Syntax Scopes</div>
<ul>
  <li>Token count expanded from <strong>54 → 106 scopes</strong>.</li>
  <li>
    <strong>New languages (high priority):</strong> Ruby, Kotlin, Swift, Dart — with dedicated scopes for classes, functions, keywords, variables, and language-specific constructs (Ruby symbols, Swift types, Dart modifiers, etc.)
  </li>
  <li>
    <strong>New languages (medium priority):</strong> Scala, Lua, R, Elixir (including macros and atoms), Haskell (types, namespaces), XML (tags, namespaces, attributes), GraphQL (types, operations, variables, fragments), Svelte (component tags, directives), Vue (directives, template tags)
  </li>
  <li>
    <strong>Generic multi-language scopes:</strong> <code>string.regexp</code> (regex literals), <code>constant.other.symbol</code> (Ruby/Elixir symbols), <code>entity.name.type.module</code> / <code>entity.name.namespace</code> (modules across languages), type parameter punctuation
  </li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">Total Stats (v1.4.0)</div>
<ul>
  <li>UI workbench colors per theme: <strong>~454</strong> (was ~387)</li>
  <li>TextMate token scopes: <strong>106</strong> (was 54)</li>
  <li>Semantic token colors: <strong>24</strong> (was 19)</li>
  <li>Languages with dedicated scopes: <strong>30+</strong> (was ~15)</li>
</ul>

<br>
<hr>
<br>

<div style="font-size: 24px; font-weight: 700;">[v1.3.6] — VS Code API 1.109 Compliance & UI Refinements</div>
<br>

<div style="font-size: 18px; font-weight: 700;">New Features</div>
<ul>
  <li>
    <strong>Full API 1.109 Coverage:</strong> Implemented all missing theme colors from VS Code API 1.109, including:
    <ul>
      <li>Advanced tab states (unfocused, modified, pinned borders)</li>
      <li>Editor group drop backgrounds and empty states</li>
      <li>Bracket pair colorization (6 color pairs + unexpected bracket)</li>
      <li>Bracket pair guides (active and inactive states)</li>
      <li>Testing icons (passed, failed, errored, queued, skipped)</li>
      <li>Merge conflict colors (current, incoming, common content)</li>
      <li>Status bar extended states (prominent, error, warning)</li>
      <li>Search editor colors</li>
      <li>Editor extras (whitespace, rulers, links)</li>
      <li>Side-by-side editor borders</li>
      <li>Banner notifications</li>
      <li>Extension icons (star, verified, pre-release, sponsor)</li>
    </ul>
  </li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">Visual Improvements</div>
<ul>
  <li>
    <strong>Harmonized Color Transitions:</strong> Refined the color progression between Activity Bar → Sidebar → Editor in all themes for a smoother, more cohesive visual experience:
    <ul>
      <li>Emerald: Optimized green-tinted gradient</li>
      <li>Dark: Adjusted to 2-point hex progression</li>
      <li>Dark Space: Refined purple-tinted gradient</li>
      <li>Coffee & Coffee Dark: Maintained warm brown transitions</li>
    </ul>
  </li>
  <li>
    <strong>Status Bar Consistency:</strong> Fixed remote indicator and hover states to respect each theme's color palette instead of using a global color.
  </li>
  <li>
    <strong>Bracket Colorization:</strong> Each theme now has unique, vibrant bracket pair colors that complement its palette.
  </li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">Engineering & Architecture</div>
<ul>
  <li>
    <strong>Extended Type System:</strong> Added new properties to <code>AetherPalette</code> interface:
    <ul>
      <li><code>editor.brackets</code>: 6 pair colors + unexpected</li>
      <li><code>editor.whitespace</code>, <code>editor.ruler</code>, <code>editor.link</code></li>
      <li><code>statusBar.itemActiveBg</code>: Per-theme hover states</li>
      <li><code>merge</code>: Conflict resolution colors</li>
      <li><code>testing</code>: Test result indicators</li>
    </ul>
  </li>
  <li>
    <strong>Modular Color Management:</strong> All new colors are defined in palette files and automatically applied across all 6 themes.
  </li>
</ul>

<div style="font-size: 24px; font-weight: 700;">[v1.3.5] — Visual Polish & Reliability</div>
<br>

<div style="font-size: 18px; font-weight: 700;">Visual Improvements & Accessibility</div>
<ul>
  <li>
    <strong>Selection Contrast Fix:</strong> Adjusted <code>editor.selection</code> and <code>list.activeSelection</code> colors across <strong>all themes</strong> (Coffee, Dark, Emerald, Space, Light). Selected text and comments are now perfectly readable.
  </li>
  <li>
    <strong>Readable Comments:</strong> Lightened the base comment color in dark themes to ensure they don't "disappear" against the selection background.
  </li>
  <li>
    <strong>Smart Italics:</strong> Refined syntax rules in <code>textmate.ts</code>. Code blocks inside comments are no longer italicized, improving readability for commented-out code. Italics now apply strictly to <code>docstrings</code> and line comments.
  </li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">Engineering & Build</div>
<ul>
  <li>
    <strong>Strict Color Validation:</strong> Updated the <code>alpha()</code> utility to explicitly throw build errors if hex codes do not have exactly 6 digits.
  </li>
  <li>
    <strong>Enhanced Testing:</strong> The <code>test-theme.ts</code> script now utilizes Regex to validate all generated hex codes, preventing broken themes from being packaged or published.
  </li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 30px;">
  [v1.3.4] — Documentation & Marketplace Polish
</div>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">Changed</div>
<ul>
  <li><strong>README:</strong> Added missing project description and improved overall clarity.</li>
  <li><strong>Assets:</strong> Fixed and adjusted image links for correct rendering on the VS Code Marketplace.</li>
</ul>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">Notes</div>
<ul>
  <li>This release contains documentation-only updates.</li>
  <li>No visual or functional changes were made to the themes.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 30px;">
  [v1.3.3] — The Emerald Update
</div>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">New Features</div>
<ul>
  <li><strong>New Theme:</strong> Added <code>Aether Emerald</code> — A balanced dark theme inspired by deep forests and gemstones, featuring a subtle green-tinted background with vibrant emerald, mint, and purple highlights.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 30px;">
  [v1.3.2] — Stability, Polish & Typos
</div>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">Changed & Fixed</div>
<ul>
  <li><strong>Typo Fixes:</strong> Corrected the spelling of "Coffee" in file paths and configuration labels (was "Coffe").</li>
  <li><strong>Code Refactoring:</strong> Removed forced type casting in UI rules for better TypeScript inference and safety.</li>
  <li><strong>Maintenance:</strong> Cleaned up project configuration and <code>.gitignore</code>.</li>
</ul>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">Internal</div>
<ul>
  <li><strong>Testing:</strong> Added an automated test script to verify the integrity of generated theme files before publishing.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 30px;">
  [v1.3.1] — Description adjustment in the package.json file
</div>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">Changed</div>
<ul>
  <li>Corrections to the description in package.json and some other improvements.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 30px;">
  [v1.3.0] — The Semantic Update & Coffee Dark
</div>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">New Features</div>
<ul>
  <li><strong>New Theme:</strong> Added <code>Aether Coffee Dark</code> — A deeper, richer espresso variant for low-light environments.</li>
  <li><strong>Extended Syntax Support:</strong> Added dedicated highlighting rules for Python, Java, Go, Rust, PHP, C/C++, SQL, React (JSX/TSX), Svelte, JSON, YAML and TOML.</li>
  <li><strong>New Branding:</strong> Updated extension Icon and Logo with a polished, planetary design.</li>
</ul>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">Changed & Improved</div>
<ul>
  <li><strong>UI Overhaul:</strong> Completely redesigned UI components (Buttons, Inputs, Badges, Dropdowns, Scrollbars) across ALL themes for a premium look.</li>
  <li><strong>Codebase Refactor:</strong> Migrated to a strictly typed architecture ensuring 100% consistency between themes.</li>
  <li><strong>Semantic Highlighting:</strong> Improved distinction between classes, interfaces, variables, and properties.</li>
  <li><strong>Documentation:</strong> Updated README with a new animated GIF preview and detailed feature list.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 30px;">
  [v1.2.3] — Logo Refinement, Markdown Fixes & Theme Improvements
</div>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">Fixed</div>
<ul>
  <li>Corrected broken links in the README markdown.</li>
  <li>Adjusted color palettes across Dark, Dark Space, Coffee, and Light themes for better consistency.</li>
</ul>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">Changed</div>
<ul>
  <li>Refactored the main project logo with improved visual quality.</li>
  <li>General UX/UI improvements and minor bug fixes across all themes.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 40px;">
  [v1.2.2] — README Restructuring
</div>

<div style="font-size: 18px; font-weight: 600; margin-top: 10px;">Changed</div>
<ul>
  <li>Improved README layout and visual structure using HTML.</li>
  <li>Enhanced theme preview grid and alignment.</li>
  <li>Updated badges, header formatting, and section dividers.</li>
  <li>General polish for VS Code Marketplace presentation.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 40px;">
  [v1.2.1] — Maintenance Update
</div>

<ul>
  <li>Updated version in <code>package.json</code> to fix the stuck verification process when publishing.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 40px;">
  [v1.2.0] — Complete Theme Refinement
</div>

<ul>
  <li>Full refactor of the Light theme, ensuring semantic color consistency.</li>
  <li>Fixes and visual improvements in Coffee theme (palette, highlights, borders).</li>
  <li>Refinements in Dark theme (tabs, borders, terminal, UI consistency).</li>
  <li>Updates in Dark Space theme (tab borders, scroll shadows, contrast adjustments).</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 40px;">
  [v1.1.5] — Correction in All Themes
</div>

<ul>
  <li>Fixed highlighting in File Explorer when a file is being edited for all themes.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 40px;">
  [v1.1.4] — Correcting Import
</div>

<ul>
  <li>Corrected an error in the Light theme import.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 40px;">
  [v1.1.3] — Version Update
</div>

<ul>
  <li>Updated version in <code>package.json</code>.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 40px;">
  [v1.1.2] — New Themes Added
</div>

<ul>
  <li>Added Aether Coffee (warm, comfortable palette).</li>
  <li>Added Aether Light, following the same visual principles of the dark themes.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 40px;">
  [v1.0.2] — Fix Modal Dark Theme
</div>

<ul>
  <li>Updated modal colors and border.</li>
  <li>Updated preview images.</li>
</ul>

<div style="font-size: 24px; font-weight: 700; margin-top: 40px;">
  [v1.0.0] — First Release
</div>

<ul>
  <li>Added Aether Dark.</li>
  <li>Added Aether Dark Space.</li>
  <li>Custom syntax highlighting for TypeScript, JavaScript, HTML, Markdown.</li>
  <li>UI integration for Explorer, Terminal, Tabs, Search, Hover Widgets.</li>
  <li>Added project icons and banners.</li>
</ul>
