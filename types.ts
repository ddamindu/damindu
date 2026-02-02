
export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  category: 'branding' | 'social-media' | 'web-ui';
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
