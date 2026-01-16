import { useTranslation } from 'react-i18next';
import * as stylex from '@stylexjs/stylex';

import { EmailIcon, InstagramIcon } from '@/components/Icons';
import { BRAND } from '@/constants/brand';

import packageJson from '../../../package.json';

import { styles } from './FooterSection.stylex';

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.footerContent)}>
        <div
          {...stylex.props(styles.footerContacts, styles.footerContactsMobile)}
        >
          <a
            href={`mailto:${BRAND.email}`}
            {...stylex.props(styles.footerLink, styles.footerLinkMobile)}
          >
            <EmailIcon
              height={18}
              width={18}
            />
            {BRAND.email}
          </a>
          <a
            href={BRAND.instagram.url}
            rel='noopener noreferrer'
            target='_blank'
            {...stylex.props(styles.footerLink, styles.footerLinkMobile)}
          >
            <InstagramIcon
              height={18}
              width={18}
            />
            {BRAND.instagram.handle}
          </a>
        </div>
        <p {...stylex.props(styles.footerBottom)}>
          {t('footer.copyright')} <span {...stylex.props(styles.version)}>v{packageJson.version}</span>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
