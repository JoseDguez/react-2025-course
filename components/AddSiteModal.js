import { useAuth } from '@/lib/auth';
import { createSite } from '@/lib/database';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useToast,
  useDisclosure
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';

const AddSiteModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const auth = useAuth();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const storeSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url
    };
    createSite(newSite);
    toast({
      title: 'Success!',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    mutate(
      '/api/sites',
      async (data) => {
        return { sites: [...data.sites, newSite] };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <Button
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: 'gray.700' }}
        _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
        onClick={onOpen}
      >
        {children}
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(storeSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My site"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <Text color="red.500">Enter your site's name</Text>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Url</FormLabel>
              <Input
                placeholder="https://website.com/"
                {...register('url', { required: true })}
              />
              {errors.url && <Text color="red.500">Enter your site's url</Text>}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
