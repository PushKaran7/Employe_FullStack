export interface IEmployee {
   
        emp_id: string;
        firstName: string;
        lastName: string;
        email: string;
        dob: Date;
        gender: 'Male' | 'Female' | 'Other';
        education: string;
        company: string;
        experience: number;
        package: number;
      
      
}
