package com.rmit.sept.bk_loginservices.model;
import javax.persistence.*;

@Entity
public class Role {

    public enum AccountRole {
        CUSTOMER,
        PUBLISHER,
        ADMIN
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    private AccountRole accountRole;
    
    public Role() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public AccountRole getAccountRole() {
        return accountRole;
    }

    public void setAccountRole(AccountRole accountRole) {
        this.accountRole = accountRole;
    }
    
    
}
