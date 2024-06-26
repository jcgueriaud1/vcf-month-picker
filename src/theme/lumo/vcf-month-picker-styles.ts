import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js';
import {
  css,
  registerStyles,
} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

registerStyles(
  'vcf-month-picker',
  css`
    :host {
      box-sizing: border-box;
      font-family: var(--material-font-family);
      font-size: var(--material-body-font-size);
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    [part='toggle-button'] {
      flex: none;
      width: 1em;
      height: 1em;
      line-height: 1;
      font-size: var(--lumo-icon-size-m);
      text-align: center;
      color: var(--lumo-contrast-60pct);
      transition: 0.2s color;
      cursor: var(--lumo-clickable-cursor);
    }
    [part='toggle-button']::before {
      display: block;
      font-family: 'lumo-icons';
      content: var(--lumo-icons-calendar);
    }
    [part='toggle-button']:hover {
      color: var(--lumo-body-text-color);
    }
  `
);

registerStyles(
  'vcf-month-picker-calendar',
  css`
    :host {
      box-sizing: border-box;
      font-family: var(--material-font-family);
      font-size: var(--material-body-font-size);
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      --_focus-ring-color: var(
        --vaadin-focus-ring-color,
        var(--lumo-primary-color-50pct)
      );
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    }

    .header {
      padding-bottom: var(--lumo-space-s);
      font-size: var(--lumo-font-size-l);
      font-weight: 500;
      line-height: 1;
    }

    .yearButton {
      outline: none;
      border: none;
      border-radius: var(--lumo-border-radius-s);
      background: none;
      padding: 0;
      height: var(--lumo-button-size, var(--lumo-size-m));
      width: var(--lumo-button-size, var(--lumo-size-m));
      color: var(--lumo-primary-color);
    }

    .yearButton:hover {
      background: var(--lumo-primary-color-10pct);
    }

    .yearButton:focus {
      box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    .yearButton[disabled] {
      color: var(--lumo-disabled-color);
    }

    .yearButton::before {
      font-family: 'lumo-icons';
      font-size: calc(var(--lumo-icon-size-m) * 1.25);
      text-align: center;
      cursor: var(--lumo-clickable-cursor);
    }

    .prevYear::before {
      content: var(--lumo-icons-chevron-left);
    }

    .nextYear::before {
      content: var(--lumo-icons-chevron-right);
    }

    .month-button {
      position: relative;
      border-radius: var(--lumo-border-radius-l);
      --_month-button-height: var(--lumo-size-m);
    }

    .month-button::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      border-radius: var(--lumo-border-radius-m);
    }

    .month-button:hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    .month-button:focus {
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    .month-button[selected] {
      color: var(--lumo-base-color);
      font-weight: 600;
    }

    .month-button[selected]::before {
      background: var(--lumo-primary-color);
    }

    .month-button[disabled] {
      color: var(--lumo-disabled-text-color);
    }
  `
);

registerStyles(
  'vcf-month-picker-overlay',
  css`
    [part='content'] {
      padding: var(--lumo-space-s);
    }

    @media (max-width: 420px), (max-height: 420px) {
      [part='content'] {
        -webkit-mask-image: none;
        mask-image: none;
      }
    }
  `,
  // @ts-ignore For unknown reason tsc doesn't allow options.include, although options' type is defined as object
  { include: ['lumo-menu-overlay'], moduleId: 'vcf-month-picker-overlay' }
);
