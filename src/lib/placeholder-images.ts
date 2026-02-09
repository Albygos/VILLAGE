
import data from '@/app/lib/placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Type-safe extraction of the placeholder images array
const rawData = data as { placeholderImages?: ImagePlaceholder[] };
export const PlaceHolderImages: ImagePlaceholder[] = rawData.placeholderImages || [];
