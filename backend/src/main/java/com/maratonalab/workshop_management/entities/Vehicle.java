package com.maratonalab.workshop_management.entities;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "tb_vehicle")
public final class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String brand;
    private String model;
    private int vehicleYear;
    private String licensePlate;
    private String chassisNumber;
    private long currentMileage;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Client owner;

    @OneToOne(mappedBy = "vehicle")
    private ServiceOrder serviceOrder;

    public Vehicle() {}

    public Vehicle(String brand, String model, int vehicleYear, String licensePlate, String chassisNumber, long currentMileage, Client owner) {
        this.brand = brand;
        this.model = model;
        this.vehicleYear = vehicleYear;
        this.licensePlate = licensePlate;
        this.chassisNumber = chassisNumber;
        this.currentMileage = currentMileage;
        this.owner = owner;
    }

    public long getId() {
        return id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getVehicleYear() {
        return vehicleYear;
    }

    public void setVehicleYear(int vehicleYear) {
        this.vehicleYear = vehicleYear;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }

    public String getChassisNumber() {
        return chassisNumber;
    }

    public void setChassisNumber(String chassisNumber) {
        this.chassisNumber = chassisNumber;
    }

    public long getCurrentMileage() {
        return currentMileage;
    }

    public void setCurrentMileage(long currentMileage) {
        this.currentMileage = currentMileage;
    }

    public Client getOwner() {
        return owner;
    }

    public void setOwner(Client owner) {
        this.owner = owner;
    }

    public ServiceOrder getServiceOrder() {
        return serviceOrder;
    }

    public void setServiceOrder(ServiceOrder serviceOrder) {
        this.serviceOrder = serviceOrder;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Vehicle vehicle = (Vehicle) o;
        return id == vehicle.id;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}

