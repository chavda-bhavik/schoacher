import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Button } from '@/components/Button';

interface SignupProps {}

const Signup: React.FC<SignupProps> = ({}) => {
    const router = useRouter();
    const [url, seturl] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        seturl(e.target.value);
    };

    const handleSubmit = () => {
        if(url == 'teacher')
        {
            router.push('/signup/teacher');
        }
        else
        {
            router.push('/signup/school');
        }
    }

    return (
        <>
            <select onChange={(e) => {handleChange(e)}}>
                <option value='school'>School</option>
                <option value='teacher'>Teacher</option>
            </select>
            <Button onClick={handleSubmit}> Next </Button>
        </>
    );
};

export default Signup;
