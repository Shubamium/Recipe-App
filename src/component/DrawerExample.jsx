import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    CircularProgress
  } from '@chakra-ui/react';
import { useRef } from 'react';

export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    return (
          <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
              Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={'xs'} 
                >
              <DrawerOverlay />
              <DrawerContent width={'20vw'}>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>
      
                <DrawerBody>
                  <Input placeholder='Type here...' />
                </DrawerBody>
      
                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='teal'>Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )
}