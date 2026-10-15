import { redirect } from 'next/navigation';

import { DEFAULT_LANGUAGE } from '@/utils/constants';

export default function Home() {
  redirect(`/${DEFAULT_LANGUAGE}`);
}
