import { createLegalRoute } from '@/components/Pages/LegalPage/createLegalRoute';

export const runtime = 'edge';

const route = createLegalRoute('privacy', 'Privacy Policy');

export const generateMetadata = route.generateMetadata;
export default route.Page;
