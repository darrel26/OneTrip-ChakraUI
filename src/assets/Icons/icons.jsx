import { createIcon } from '@chakra-ui/icons';

// using `path`
export const LocationIcon = createIcon({
  displayName: 'LocationIcon',
  viewBox: '0 0 20 20',
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill="#E64848"
      d="M10 0c.7 0 1.25.56 1.25 1.25v1.36a7.5 7.5 0 0 1 6.14 6.14h1.36a1.25 1.25 0 1 1 0 2.5h-1.36a7.5 7.5 0 0 1-6.14 6.14v1.36a1.25 1.25 0 1 1-2.5 0v-1.36a7.5 7.5 0 0 1-6.14-6.14H1.25a1.25 1.25 0 1 1 0-2.5h1.36a7.5 7.5 0 0 1 6.14-6.14V1.25C8.75.55 9.31 0 10 0ZM5 10a5 5 0 1 0 10 0 5 5 0 0 0-10 0Zm5 3.13a3.12 3.12 0 1 1 0-6.25 3.12 3.12 0 0 1 0 6.25Z"
    />
  ),
});
