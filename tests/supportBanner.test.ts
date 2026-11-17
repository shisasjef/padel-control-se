import { describe, expect, it } from 'vitest';
import {
  renderSignatureFooter,
  renderSupportBanner,
  renderSupportButton,
  renderSupportCredentialsHtml,
  renderSupportModal,
  SUPPORT_INFO
} from '../src/core/constants';

describe('support banner & modal', () => {
  it('exposes the exact alias, CVU, and message constants', () => {
    expect(SUPPORT_INFO.alias).toBe('apps.se');
    expect(SUPPORT_INFO.cvu).toBe('0000168300000027791956');
    expect(SUPPORT_INFO.message).toBe(
      'Si querés colaborar para que siga desarrollando aplicaciones podés hacerlo desde acá'
    );
  });

  it('renders copyable alias and CVU controls in both the banner and modal', () => {
    const credsHtml = renderSupportCredentialsHtml();
    expect(credsHtml).toContain('apps.se');
    expect(credsHtml).toContain('0000168300000027791956');
    expect(credsHtml).toContain('data-copy-support="alias"');
    expect(credsHtml).toContain('data-copy-support="cvu"');

    const bannerHtml = renderSupportBanner();
    expect(bannerHtml).toContain(SUPPORT_INFO.message);
    expect(bannerHtml).toContain('data-copy-support="alias"');
    expect(bannerHtml).toContain('data-copy-support="cvu"');
    expect(bannerHtml).toContain('no-print');

    const footerHtml = renderSignatureFooter();
    expect(footerHtml).toContain('support-banner');
    expect(footerHtml).toContain('Sairaf Engel');

    const modalHtml = renderSupportModal();
    expect(modalHtml).toContain(SUPPORT_INFO.message);
    expect(modalHtml).toContain('apps.se');
    expect(modalHtml).toContain('0000168300000027791956');
    expect(modalHtml).toContain('data-act="close-support-modal"');
  });

  it('renders the header trigger button with modal action', () => {
    const btnHtml = renderSupportButton();
    expect(btnHtml).toContain('data-act="open-support-modal"');
    expect(btnHtml).toContain('support-hdr-btn');
    expect(btnHtml).toContain('Colaborar');
  });
});
