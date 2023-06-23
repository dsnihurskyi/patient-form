import React from 'react';
import { Formik, Form, type FormikErrors } from 'formik';
import Button from '@mui/material/Button';
import { INITIAL_PATIENT_FORM_VALUES } from '../../consts/form';
import { type PatientFormValues } from '../../global/types';
import {
  validatePatientBirthdayDate,
  validatePatientEmail,
  validatePatientMobile,
  validatePatientName,
} from '../../utils/validation';
import CitySelect from './CitySelect';
import GenderSelect from './GenderSelect';
import BirthdayField from './BirthdayField';
import CustomInput from '../elements/CustomInput';
import DoctorsWithSpecialitiesSection from './DoctorsWithSpecialitiesSection';

const PatientForm: React.FC = () => {
  const handleSubmitForm = (values: PatientFormValues): void => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={INITIAL_PATIENT_FORM_VALUES}
      validate={(values: PatientFormValues) => {
        const { birthdayDate, email, mobile } = values;
        const errors: FormikErrors<PatientFormValues> = {};

        if (validatePatientBirthdayDate(birthdayDate).length > 0) {
          errors.birthdayDate = validatePatientBirthdayDate(birthdayDate);
        }

        if (validatePatientEmail(email, mobile).length > 0) {
          errors.email = validatePatientEmail(email, mobile);
        }

        if (validatePatientMobile(email, mobile).length > 0) {
          errors.mobile = validatePatientMobile(email, mobile);
        }

        return errors;
      }}
      onSubmit={handleSubmitForm}
    >
      <Form className='patient-form'>
        <CustomInput
          id='patientName'
          name='patientName'
          placeholder='Name'
          label='Name'
          validate={validatePatientName}
        />
        <BirthdayField />
        <GenderSelect />
        <CitySelect />
        <DoctorsWithSpecialitiesSection />
        <CustomInput
          id='email'
          name='email'
          placeholder='email@address.com'
          label='Email'
        />
        <CustomInput
          id='mobile'
          name='mobile'
          placeholder='Mobile number'
          label='Mobile number'
        />
        <Button variant='contained' type='submit'>
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default PatientForm;
