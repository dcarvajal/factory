```js
import Button from '@ivoryio/kogaio/Button';
import Typography from '@ivoryio/kogaio/Typography';
import { Box, Flex } from '@ivoryio/kogaio/Responsive';

  <Flex alignItems='center'>
    <Space px={4} py={3}>
      <Box>
        <Typography variant='h6'>A Space example</Typography>
      </Box>
      <Box>
        <Space py={2}>
          <Button title='Button' variant='outline' />
        </Space>
      </Box>
    </Space>
  </Flex>
```