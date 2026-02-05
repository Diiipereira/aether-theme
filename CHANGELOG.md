<div style="font-size: 32px; font-weight: 700; margin-bottom: 20px;">
  📜 Changelog
</div>

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
