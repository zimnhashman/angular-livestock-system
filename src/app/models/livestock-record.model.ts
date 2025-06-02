export interface SensorData {
    accelerometerX: number;
    accelerometerY: number;
    accelerometerZ: number;
    bolusPH: number;
    gps: string;
    pedometer: number;
}

export interface HealthData {
    cowTemp: number;
    mastitis: boolean;
    milkFat: number;
    milkProtein: number;
    milkLactose: number;
    milkYield: number;
}

export interface EnvironmentData {
    envTemp: number;
    envHumidity: number;
    envCO2: number;
    envNH3: number;
    envLight: number;
}

export interface LivestockRecord {
    rfid: string;
    farmId: number;
    timestamp: string;
    sensor: SensorData;
    health: HealthData;
    environment: EnvironmentData;
    encryptedData: string;
}