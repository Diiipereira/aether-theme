<div style="font-size: 32px; font-weight: 700; margin-bottom: 20px;">
  📜 Changelog
</div>

<div style="font-size: 24px; font-weight: 700;">[v1.6.3] — Modern UI Colors</div>
<br>

<p>VS Code 1.134 exposed theme keys for the Modern UI. Until now its tabs and activity bar were painted from values no theme could reach.</p>

<div style="font-size: 18px; font-weight: 700;">Added</div>
<ul>
  <li><strong>Modern UI tabs and activity bar:</strong> <code>modernTab.activeBackground</code>, <code>activeForeground</code>, <code>hoverBackground</code> and <code>hoverForeground</code>. Left at their defaults, the active tab and the hovered tab resolve to the same color in all six themes, so neither can be told from the other. Each palette now sets an opaque active tab against a half-transparent hover, matching the classic tab style. <code>modernEditorTab.*</code> and <code>modernActivityBar.*</code> inherit from these.</li>
  <li><strong>Inactive editor tabs:</strong> <code>modernEditorTab.inactiveBackground</code>, which VS Code leaves fully transparent by default.</li>
  <li><strong>Chat search:</strong> <code>chat.findMatchBackground</code> and <code>chat.findMatchHighlightBackground</code>, on the same accent the editor and terminal already use for find matches.</li>
</ul>

<br>
<hr>
<br>

<div style="font-size: 24px; font-weight: 700;">[v1.6.2] — Contrast Fixes</div>
<br>

<p>A full contrast pass over all six themes. The worst pairing measured <strong>1.03:1</strong> — the same luminance on both sides, effectively invisible on screen.</p>

<div style="font-size: 18px; font-weight: 700;">Fixed</div>
<ul>
  <li><strong>Commit graph ref badges:</strong> the branch and remote pills in the Source Control graph painted their label in a light tone over a light accent fill. Worst case was <strong>1.05:1</strong> on Dark Space, where the branch name was unreadable. Every theme now reads between 4.58 and 12.10.</li>
  <li><strong>Status bar remote and error indicators:</strong> the remote badge was <strong>1.03:1</strong> on Emerald and the error counter <strong>1.87:1</strong>. Both now pick the readable text tone for their palette — vivid accents take dark text, deep accents take light.</li>
  <li><strong>Light palette:</strong> the whole accent family read too light on the cream canvas. Six syntax colors were below AA — comments 3.71, numbers 3.97, types 4.24, strings 4.27, errors 4.28, keywords 4.49 — and all now clear 4.5 with the hue preserved to within 1°. The same tones feed status, git, terminal and bracket colors, so those were corrected with them.</li>
  <li><strong>Secondary text:</strong> ghost text, inlay hints and inline debug values sat at <strong>2.10:1</strong> on Light, where translucent text loses far more contrast than it does on a dark ground. Breadcrumbs, the inactive title bar and disabled controls raised alongside them.</li>
  <li><strong>Inactive tab labels:</strong> raised on Light, Coffee and Coffee Dark. The active tab stays roughly 2.8× stronger, so the hierarchy is unchanged — the inactive label is simply legible now.</li>
</ul>

<div style="font-size: 18px; font-weight: 700;">Color Keys</div>
<ul>
  <li>Added <code>testing.message.error.badgeBackground</code>, <code>badgeForeground</code> and <code>badgeBorder</code>, which replace the <code>testing.message.error.decorationForeground</code> that VS Code retired.</li>
  <li>Dropped <code>activityBar.dropBackground</code>, <code>scm.providerBorder</code> and <code>chatManagement.sashBorder</code> — VS Code no longer registers them.</li>
</ul>

<br>
<hr>
<br>

<div style="font-size: 24px; font-weight: 700;">[v1.6.1] — Setup Documentation</div>
<br>

<p>Documentation only — no palette, token or color changes. Released so the notes reach the Marketplace and Open VSX listings.</p>
<ul>
  <li><strong>Modern UI:</strong> documented <code>workbench.experimental.modernUI</code>. It is experimental, ships off by default and is rolled out gradually, so it can be active on one machine and not on another — pinning it in <code>settings.json</code> is what makes the v1.6.0 card layout show up consistently.</li>
  <li><strong>Window controls:</strong> documented <code>window.controlsStyle</code>. With the Modern UI on, VS Code hands the minimize / maximize / close buttons to Electron's native overlay and feeds it a hardcoded background — <code>#252526</code> on every dark theme, <code>#F3F3F3</code> on every light one — instead of <code>titleBar.activeBackground</code>. No theme key reaches that overlay, so <code>"window.controlsStyle": "custom"</code> is the fix: VS Code then draws the buttons itself and they follow the palette. Windows and Linux only, and only needed while the Modern UI is enabled.</li>
</ul>

<br>
<hr>
<br>

<div style="font-size: 24px; font-weight: 700;">[v1.6.0] — Modern UI Palette Overhaul (VS Code 1.132)</div>
<br>

<p>The Modern UI stopped being just a layout change. In 1.132 it <strong>derives several surfaces itself</strong>, from keys the themes were not setting — so parts of the UI ignored the palette entirely and fell back to grays. All six palettes were rebuilt around that behaviour, and <strong>111 new workbench colors</strong> were added per theme (641 → 752). No keys removed.</p>

<div style="font-size: 18px; font-weight: 700;">What the theme does not control</div>
<p>Verified against <code>workbench.desktop.main.css</code> of VS Code 1.132.0. These are computed by the workbench, not read from a theme key:</p>
<ul>
  <li><strong>Active tab:</strong> <code>color-mix(foreground 22%, transparent)</code> over the canvas — 16% on light themes. No <code>tab.*</code> key affects it, so a near-white <code>foreground</code> produces a gray pill regardless of the palette.</li>
  <li><strong>Inactive tabs:</strong> <code>background: transparent !important</code>. They have no fill by design; only the label shows, at <code>foreground</code> 50%.</li>
  <li><strong>Activity Bar icons:</strong> the selected one uses <code>foreground</code>, the rest use <code>icon.foreground</code>. <code>activityBar.foreground</code> only applies to the classic UI.</li>
  <li><strong>Window canvas:</strong> painted with <code>editor.background</code> — the same key as the code area, which is why the editor card is separated by <code>surface.border</code> rather than by a background of its own.</li>
</ul>

<div style="font-size: 18px; font-weight: 700;">New Workbench Colors</div>
<ul>
  <li><strong>Card surfaces:</strong> <code>surface.background</code>, <code>surface.foreground</code>, <code>surface.border</code> — shared by the sidebar, panel, auxiliary bar and editor cards — plus <code>widget.border</code> and <code>panelSectionHeader.border</code></li>
  <li><strong>Agents / AI panel:</strong> <code>agentsPanel.*</code>, <code>agentsChatInput.*</code>, <code>agentsBadge.*</code>, <code>agentsUnreadBadge.*</code>, <code>agentsNewSessionButton.*</code>, <code>agentsUpdateButton.*</code>, <code>agentsVoice.*</code>, <code>agentsGradient.tintColor</code>, <code>agentStatusIndicator.background</code>, <code>agentSession*</code>, <code>agentFeedback*</code>, <code>agents.background</code></li>
  <li><strong>Chat:</strong> <code>chat.voiceGlowBaseColor</code>, <code>chat.dictationActiveMicGlow</code>, <code>chat.inputWorkingBorderColor1–3</code></li>
  <li><strong>Lists:</strong> <code>list.focusOutline</code>, <code>list.focusAndSelectionOutline</code>, <code>list.inactiveFocusOutline</code>, <code>list.inactiveFocusBackground</code>, <code>list.invalidItemForeground</code> — the chat session list draws focus as an outline, not a fill</li>
  <li><strong>Status Bar:</strong> the full hover/focus set (<code>statusBarItem.*HoverBackground/HoverForeground</code>, <code>statusBar.focusBorder</code>, <code>statusBarItem.focusBorder</code>, <code>statusBarItem.offline*</code>, <code>statusBarItem.compactHoverBackground</code>) — the bar is transparent in Modern UI, so only these states paint</li>
  <li><strong>Chrome:</strong> <code>commandCenter.activeBorder/inactiveBorder/inactiveForeground/debuggingBackground</code>, <code>menubar.selection*</code>, <code>menu.selectionBorder</code>, <code>button.border/secondaryBorder/separator</code>, <code>tab.activeBorder</code>, <code>actionBar.toggledBackground</code>, <code>toolbar.hoverOutline</code></li>
  <li><strong>Widgets &amp; forms:</strong> <code>notifications.border</code>, <code>notificationCenter.border</code>, <code>notifications{Error,Warning,Info}Icon.foreground</code>, <code>inputValidation.warning*/info*</code>, <code>inputOption.hoverBackground</code>, <code>quickInputTitle.background</code>, <code>quickInputList.focusIcon/HighlightForeground</code>, <code>textPreformat.*</code>, <code>textSeparator.foreground</code>, <code>extensionButton.*</code>, <code>welcomePage.tileBorder</code>, <code>welcomePage.progress.background</code>, <code>settings.focusedRow*</code>, <code>settings.rowHoverBackground</code>, <code>settings.numberInput*</code>, sash borders</li>
</ul>

<div style="font-size: 18px; font-weight: 700;">Palette Changes</div>
<p>Every theme received an explicit icon foreground, a depth scale (cards below the canvas, widgets level with the editor), a <code>foreground</code> calibrated so the derived tab pill carries the theme hue, buttons and badges with light text above WCAG AA, and a real border hierarchy instead of a single value reused for every role.</p>
<ul>
  <li><strong>Emerald:</strong> mint <code>foreground</code> so the active tab reads green instead of gray; button and badge moved to a deeper fill that supports light text</li>
  <li><strong>Dark:</strong> dropped the violet cast inherited from Dark Space. Neutral graphite base, blue accent, and a syntax set rebuilt without purple</li>
  <li><strong>Dark Space:</strong> three different border values unified, four near-identical backgrounds collapsed into one, pure white removed, comments raised from 2.01:1</li>
  <li><strong>Light:</strong> warmer canvas — chroma 8 → 17 — so it reads as cream rather than off-white; comments raised from 2.45:1</li>
  <li><strong>Coffee:</strong> syntax chroma cut (keywords 138 → 99, strings 136 → 77) to stop the palette vibrating against the warm base; <code>#2c2318</code> had been serving nine roles; button contrast was 3.36:1</li>
  <li><strong>Coffee Dark:</strong> comments were at 1.32:1 and borders at 1.03:1 — both effectively invisible. Canvas chroma was 2, leaving no coffee tone at all. <code>#0e0c0a</code> had been serving ten roles and <code>#080706</code> five, three of which were states that must stay visible</li>
</ul>

<br>
<hr>
<br>

<div style="font-size: 24px; font-weight: 700;">[v1.5.1] — Modern UI Support (VS Code 1.129 card layout)</div>
<br>

<p>VS Code 1.129 introduced an experimental <strong>Modern UI</strong> (<code>workbench.experimental.modernUI</code>) — a card-like layout where the sidebar, panel, editor groups and tabs become distinct surfaces with rounded corners, visible borders and gaps. This exposes many surface/border colors that themes previously never had to define, which left parts of the new UI looking mismatched. This release adds <strong>51 new workbench colors</strong> per theme (590 → 641), all derived from each theme's existing palette. No keys removed.</p>
<ul>
  <li><strong>Card surfaces &amp; sticky scroll:</strong> <code>sideBarTitle.background/border</code>, <code>sideBarActivityBarTop.border</code>, <code>sideBarStickyScroll.background/border/shadow</code>, <code>panelStickyScroll.*</code>, <code>panelTitle.border</code>, <code>panel.dropBorder</code>, <code>panelInput.border</code>, <code>outputView.background</code>, <code>outputViewStickyScroll.background</code></li>
  <li><strong>Activity Bar (top layout &amp; badges):</strong> <code>activityBarTop.background/foreground/inactiveForeground/activeBorder/activeBackground/dropBorder</code>, <code>activityBar.dropBorder</code>, <code>activityBar.activeFocusBorder</code>, <code>activityWarningBadge.*</code>, <code>activityErrorBadge.*</code>, <code>panelTitleBadge.*</code></li>
  <li><strong>Tabs as surfaces:</strong> <code>tab.selectedBackground/Foreground/BorderTop</code>, <code>tab.hoverBorder</code>, <code>editorGroupHeader.border</code>, <code>editorGroupHeader.noTabsBackground</code>, <code>editorGroup.dropIntoPrompt*</code></li>
  <li><strong>Tree &amp; list icons:</strong> <code>list.activeSelectionIconForeground</code>, <code>list.inactiveSelectionIconForeground</code>, <code>list.focusHighlightForeground</code>, <code>list.deemphasizedForeground</code>, <code>list.filterMatchBackground/Border</code>, <code>list.dropBetweenBackground</code>, <code>listFilterWidget.*</code>, <code>tree.inactiveIndentGuidesStroke</code>, <code>tree.tableColumnsBorder</code>, <code>tree.tableOddRowsBackground</code></li>
</ul>
<p><em>Note:</em> the window controls (minimize / maximize / close) have no dedicated theme colors — their glyphs inherit <code>titleBar.activeForeground</code>, which is already defined, so the Modern UI restyling of that area needs no theme change.</p>

<br>
<hr>
<br>

<div style="font-size: 24px; font-weight: 700;">[v1.5.0] — VS Code 1.128 API Sync (Chat, Inline Edits, Git Graph & Terminal)</div>
<br>

<div style="font-size: 18px; font-weight: 700;">API Coverage — New Workbench Colors</div>
<p>Synced the theme with the VS Code color registry through the July 2026 (1.128) releases. Added <strong>136 new workbench colors</strong> per theme (454 → 590), all derived from each theme's existing palette so every one of the 6 themes stays consistent. No keys removed.</p>
<ul>
  <li><strong>Chat / AI:</strong> <code>chat.avatarBackground/Foreground</code>, <code>chat.editedFileForeground</code>, <code>chat.linesAddedForeground</code>, <code>chat.linesRemovedForeground</code>, <code>chat.requestCodeBorder</code>, <code>chat.requestBubbleBackground/HoverBackground</code>, <code>chat.checkpointSeparator</code>, <code>chat.thinkingShimmer</code>, <code>chatManagement.sashBorder</code>, <code>inlineChatInput.background/border/focusBorder/placeholderForeground</code>, <code>inlineChatDiff.inserted/removed</code>, <code>interactive.active/inactiveCodeBorder</code></li>
  <li><strong>Inline Edits (Copilot NES):</strong> full <code>inlineEdit.*</code> suite — original/modified backgrounds, changed line/text bands, borders, tab-accept borders, and the <code>inlineEdit.gutterIndicator.*</code> primary/secondary/successful states</li>
  <li><strong>Source Control Graph:</strong> <code>scmGraph.foreground1–5</code>, <code>scmGraph.historyItemRef/RemoteRef/BaseRefColor</code>, and the hover additions/deletions/label foregrounds</li>
  <li><strong>Inline Git Blame:</strong> <code>git.blame.editorDecorationForeground</code></li>
  <li><strong>Terminal:</strong> <code>terminalCommandDecoration.default/success/errorBackground</code>, <code>terminalStickyScroll.*</code>, <code>terminalOverviewRuler.*</code>, <code>terminalCommandGuide.foreground</code>, <code>terminal.hoverHighlight/dropBackground</code>, find-match borders, initial hint, and the <code>terminalSymbolIcon.*</code> suggest-widget icon set</li>
  <li><strong>Editor:</strong> <code>editorMultiCursor.primary/secondary.foreground</code>, <code>editorStickyScrollGutter.background</code>, <code>editor.placeholder.foreground</code>, secondary diff gutter bands, comment gutter glyphs, <code>editor.stackFrame/focusedStackFrameHighlightBackground</code>, <code>editor.inlineValuesForeground/Background</code></li>
  <li><strong>Comments &amp; Review:</strong> <code>editorCommentsWidget.*</code>, <code>peekViewEditorStickyScroll.background</code></li>
  <li><strong>Debug:</strong> <code>debugToolBar.border</code>, <code>debugView.exception/stateLabel*</code>, <code>debugView.valueChangedHighlight</code>, <code>debugTokenExpression.type</code></li>
  <li><strong>Testing:</strong> coverage colors (<code>testing.covered*</code>, <code>testing.uncovered*</code>, <code>testing.coverCountBadge*</code>) and <code>testing.message.info.*</code></li>
  <li><strong>Widgets:</strong> <code>editorActionList.*</code> (Quick Fix menu), <code>editorWidget.resizeBorder</code>, <code>editorSuggestWidget.focusHighlight/selected*</code>, <code>editorSuggestWidgetStatus.foreground</code>, <code>toolbar.activeBackground</code></li>
</ul>

<br>

<div style="font-size: 18px; font-weight: 700;">Engineering</div>
<ul>
  <li><strong>Build tooling:</strong> Fixed the <code>test-theme.ts</code> validator, which incorrectly flagged <code>fontStyle</code> ("italic"/"bold") and <code>scope</code> values as invalid hex colors — validation now skips non-color keys and passes cleanly across all 6 themes.</li>
  <li><strong>Compatibility:</strong> Bumped minimum engine from <code>^1.70.0</code> to <code>^1.90.0</code>. New color keys are gracefully ignored by older builds, so themes still render on prior versions.</li>
</ul>

<br>
<hr>
<br>

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
