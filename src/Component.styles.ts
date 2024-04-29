import { createStyles, MantineNumberSize, getSize } from '@mantine/core';

export interface ComponentStylesParams {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: ComponentStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    ...theme.fn.focusStyles(),
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    padding: getSize({ size: padding, sizes: theme.spacing }),
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
    '&[data-loading]': {
      cursor: 'default',
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      },
    },
  },
  inner: {
    pointerEvents: 'none',
    userSelect: 'none',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },
}));
