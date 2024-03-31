import { ErrorMessage, Field } from 'formik';
import React from 'react';

// const InitialValues = {
//     name: '',
//     signature: null
//   };

//   const validationSchema = {
//     name: Yup.string().required('Required'),
//     file: Yup.mixed()
//       .test('fileSize', 'File too large', (value) => {
//         if (!value) return true;
//         return value.size <= 100000000; // 100 MB
//       })
//       .test('fileType', 'Unsupported File Format', (value) => {
//         if (!value) return true;
//         return ['image/jpeg', 'image/png'].includes(value.type);
//       })
//   };

{
  /* <Formik
    enableReinitialize={true}
    initialValues={initialValues}
    validationSchema={Yup.object(validationSchema)}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        // props.handleSubmit(values);
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Flex>
          <Input label="Input Label" name="name" type="text" />
        </Flex>
        <Flex>
          <FileInput
            label="File Label"
            name="file"
            fileInfo={'SVG, PNG, JPG or GIF (MAX. 800x400px)'}
            accept="application/pdf,image/jpeg,image/png"
          />
        </Flex>
        <Flex>
          <Select
            label="Select Label"
            name="select"
            fileInfo={'SVG, PNG, JPG or GIF (MAX. 800x400px)'}
            accept="application/pdf,image/jpeg,image/png"
          >
            <option selected>Choose an option</option>
            <option value="one">Option one</option>
            <option value="two">Option two</option>
            <option value="three">Option three</option>
            <option value="four">Option four</option>
          </Select>
        </Flex>
        <Flex>
          <Radio
            label="Radio Label"
            name="radio"
            radioOptions={radioOptions}
          ></Radio>
        </Flex>
        <Flex>
          <TextArea
            label="Text Area Label"
            name="textArea"
            type="text"
          ></TextArea>
        </Flex>

        <Flex>
          <AdvanceCheckbox
            label="Checkbox Label"
            name="checkbox"
            checkboxOptions={checkboxOptions}
          ></AdvanceCheckbox>
        </Flex>
        <Toggle name={'toggle'} label={'Toggle'} />

        <Flex>
          <FloatingLabel
            label="Floating Label"
            name="floating"
            type="text"
          />
        </Flex>
        <button
          type="submit"
          disabled={isSubmitting}
          className={
            'bg-brand text-white flex px-6 py-2 rounded-md mt-5'
          }
        >
          {isSubmitting ? (
            <Icon
              icon={'line-md:loading-twotone-loop'}
              fontSize={22}
              className={'mr-2'}
            />
          ) : (
            <Icon
              icon="iconoir:verified-user"
              fontSize={24}
              className={'mr-2'}
            />
          )}
          Submit
        </button>
      </Form>
    )}
  </Formik> */
}

// const Flex = ({ children }) => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">{children}</div>
//   );
// };

// const InitialValues = {
//   name: '',
//   floating: '',
//   textArea: '',
//   file: null,
//   select: '',
//   radio: '',
//   checkbox: [],
//   toggle: false
// };

// const validationSchema = {
//   name: Yup.string().required('Required'),
//   textArea: Yup.string().required('Required'),
//   file: Yup.mixed()
//     .test('fileSize', 'File too large', (value) => {
//       if (!value) return true;
//       return value.size <= 100000000; // 100 MB
//     })
//     .test('fileType', 'Unsupported File Format', (value) => {
//       if (!value) return true;
//       return ['image/jpeg', 'image/png'].includes(value.type);
//     })
// };

// const radioOptions = [
//   {
//     value: 'option1',
//     title: 'First Option',
//     caption: 'Choose this option'
//   },
//   {
//     value: 'option2',
//     title: 'Second Option',
//     caption: 'Choose this option'
//   },
//   {
//     value: 'option3',
//     title: 'Third Option',
//     caption: 'Choose this option'
//   }
// ];
// const checkboxOptions = [
//   {
//     value: 'checkoption1',
//     title: 'First Option',
//     caption: 'Choose this option'
//   },
//   {
//     value: 'checkoption2',
//     title: 'Second Option',
//     caption: 'Choose this option'
//   },
//   {
//     value: 'checkoption3',
//     title: 'Third Option',
//     caption: 'Choose this option'
//   }
// ];

const Input = ({ label, name, type, placeholder }) => {
  return (
    <>
      <div class="mb-2">
        <label htmlFor={name} class="block mb-2 text-sm font-medium text-black">
          {label}
        </label>
        <Field
          type={type ? type : 'text'}
          id={name}
          name={name}
          className="bg-gray-6 bg-opacity-10 border border-gray-4 text-black  placeholder-brand text-sm rounded-lg focus:ring-brand focus:border-brand block w-full p-2.5"
          placeholder={placeholder ? placeholder : ''}
        ></Field>
        <p class="mt-2 text-sm text-red font-medium">
          <ErrorMessage name={name} />
        </p>
      </div>
    </>
  );
};

export default Input;
