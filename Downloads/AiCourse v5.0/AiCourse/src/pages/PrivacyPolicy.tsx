
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Shield } from 'lucide-react';
import { serverURL } from '@/constants';
import axios from 'axios';
import StyledText from '@/components/styledText';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  const { t } = useTranslation('legal');
  const [data, setData] = useState('');

  useEffect(() => {
    async function dashboardData() {
      const postURL = serverURL + `/api/policies`;
      const response = await axios.get(postURL);
      setData(response.data[0].privacy)
    }
    dashboardData();
  }, []);

  return (
    <>
      <SEO
        title={t('privacy.seo.title')}
        description={t('privacy.seo.description')}
        keywords={t('privacy.seo.keywords')}
      />
      <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
{t('privacy.backToHome')}
          </Link>
        </div>

        <div className="space-y-12">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold">{t('privacy.title')}</h1>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <StyledText text={data} />
          </div>

          <div className="text-center mt-16">
            <Button asChild>
              <Link to="/contact">{t('privacy.contactLegal')}</Link>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
