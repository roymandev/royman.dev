import BaseSection from '@/components/Resume/BaseSection';
import { royman } from '@/data/resumeData';

const SectionContacts = () => (
  <BaseSection title="Contacts">
    <ul className="flex flex-col">
      <li className="flex flex-wrap">
        <span className="w-20 font-medium">Phone</span>
        <span>{royman.contacts.phone}</span>
      </li>
      <li className="flex flex-wrap">
        <span className="w-20 font-medium">Email</span>
        <span>{royman.contacts.email}</span>
      </li>
      <li className="flex flex-wrap">
        <span className="w-20 font-medium">Website</span>
        <span>{royman.contacts.website}</span>
      </li>
      <li className="flex flex-wrap">
        <span className="w-20 font-medium">Github</span>
        <span>{royman.contacts.github}</span>
      </li>
    </ul>
  </BaseSection>
);

export default SectionContacts;
