export interface ItemModel {

    _id: string;
    bottle_no: string;
    cat_no: string;
    brand: string;
    name: string;
    nature: string;
    type: string;
    mol_weight: number;
    mol_formula: string;
    purity: number;
    storage_temperature: {
        min: number;
        max: number; 
    };
    storage_place: string;
    risk_phrases: number;
    safety_phrases: [number];
    p_statements: [string];
    h_statements: [string];
    hazard_pictograms: [number];
    msds_url: string;
    other_instructions:  string;
    quantity: {
        bsc1: {
            value: number;
            unit: string};
        bsc2: {
            value: number;
            unit: string};
        bsc3: {
            value: number;
            unit: string};
        bsc4: {
            value: number;
            unit: string};
        bsc5: {
            value: number;
            unit: string};
        msc1: {
            value: number;
            unit: string };
        msc2: {
            value: number;
            unit: string };
        msc3: {
            value: number;
            unit: string };
        cmpr: {
            value: number;
            unit: string }
    };
}