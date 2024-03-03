import { NextApiRequest, NextApiResponse } from 'next';

interface StaffMember {
    id: number;
    name: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    role: string;
}

export const GET = (req: NextApiRequest, res: NextApiResponse<StaffMember[]>) => {
    if (req.method === 'GET') {
        const staffList: StaffMember[] = [
            { id: 1, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Admin' },
            { id: 2, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Customer' },
            { id: 3, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Customer' },
            { id: 2, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Customer' },
        ];

        return Response.json(staffList)
    } else {
        res.status(405).end(); // Method Not Allowed
    }
};

export const POST = (req: NextApiRequest, res: NextApiResponse<StaffMember[]>) => {
    if (req.method === 'POST') {
        const staffList: StaffMember[] = [
            { id: 1, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Admin' },
            { id: 2, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Customer' },
            { id: 3, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Customer' },
            { id: 2, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Customer' },
        ];

        return Response.json(staffList)
    } else {
        res.status(405).end(); // Method Not Allowed
    }
};