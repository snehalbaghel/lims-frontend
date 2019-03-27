export interface ItemRequestModel {
    _id: string;
    indenter_id: string;
    item_id: string;
    quantity: {
        value: number;
        unit: string;
    };
    intended_use: string;
    subject_code: string;
    date: Date;
    approved: boolean;
    approved_quantity: {
        value: number;
        unit: string;
    };
    approved_by: string;
}
