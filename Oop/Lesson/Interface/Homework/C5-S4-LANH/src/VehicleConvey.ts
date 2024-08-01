import { Vehicle } from "./Vehicle"

export class VehicleConvey {
    vehicles: Vehicle[] = []
    addVehicle(veh: Vehicle) {
        this.vehicles.push(veh)
    }
    getMaxSpeed(): number {
        let conveySpeed = 0
        conveySpeed = this.vehicles[0].getSpeed()
        for (let allVehicle of this.vehicles) {
            let theSpeed = allVehicle.getSpeed()
            if (theSpeed < conveySpeed) {
                conveySpeed = theSpeed
            }
        }
        return conveySpeed
    }
}