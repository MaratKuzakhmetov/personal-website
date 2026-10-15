import { createLegalRoute } from '@/components/Pages/LegalPage/createLegalRoute';

export const runtime = 'edge';

const route = createLegalRoute('impressum', 'Legal Notice');

export const generateMetadata = route.generateMetadata;
export default route.Page;
