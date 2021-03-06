```js
import { useState } from 'react'
import Button from '@ivoryio/kogaio/Button'
import { Box, Flex, Space } from '@ivoryio/kogaio/Responsive'
import Typography from '@ivoryio/kogaio/Typography'

const ModalExample = () => {
  const [isModalShown, setModalShown] = useState(false)
  const hideModal = () => setModalShown(false)
  const toggleModal = () => setModalShown(prevState => !prevState)
  return (
    <>
      <Button title='Show modal' onClick={toggleModal} variant='outline' />
      <Modal
        animated
        onBackdropClick={hideModal}
        id='example1'
        noScroll
        visible={isModalShown}
        withPortal>
        <Space px={4} py={6}>
          <Box bg='white' textAlign='center'>
            <Typography variant='h4'>
              This is a mocked message inside your modal.
              <Typography>
                Are you sure you wish to close this modal?
              </Typography>
            </Typography>
            <Flex alignItems='center' justifyContent='center'>
              <Space mt={3} mx={1}>
                <Button
                  onClick={hideModal}
                  title='No, close'
                  variant='outline'
                />
                <Button onClick={hideModal} title='Yes, close' />
              </Space>
            </Flex>
          </Box>
        </Space>
      </Modal>
    </>
  )
}
;<ModalExample />
```
