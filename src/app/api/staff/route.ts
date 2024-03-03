import { NextApiRequest, NextApiResponse } from 'next';

interface StaffMember {
    id: number;
    name: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    role: string;
}

const staffList: StaffMember[] = [
    { id: 1, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Admin' },
    { id: 2, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Customer' },
    { id: 3, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Customer' },
    { id: 4, name: 'John', lastName: 'Doe', gender: 'man',phoneNumber: '9993343454',role: 'Customer' },
];

export const GET = (req: NextApiRequest, res: NextApiResponse<StaffMember[]>) => {
    if (req.method === 'GET') {
        return Response.json(staffList)
    }
    else {
        res.status(405).end();
    }
};


export const POST = (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const data = JSON.parse(req.body);

            const newStaffMember = { ...data, id: staffList.length + 1 };

            staffList.push(newStaffMember);

            res.status(200).json(staffList);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
};