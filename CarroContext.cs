using System;
using System.Collections.Generic;
using Carro_assignment.Models;
using Microsoft.EntityFrameworkCore;

namespace Carro_assignment;

public partial class CarroContext : DbContext
{
    public CarroContext()
    {
    }

    public CarroContext(DbContextOptions<CarroContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Logintime> Logintimes { get; set; }

    public virtual DbSet<Userstatus> Userstatuses { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Database=carro;Username=postgres;Password=P@ssw0rd");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("employee_pkey");

            entity.ToTable("employee");

            entity.Property(e => e.Id)
                .HasDefaultValueSql("nextval('logintime_id_seq'::regclass)")
                .HasColumnName("id");
            entity.Property(e => e.Department)
                .HasMaxLength(100)
                .HasColumnName("department");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.Lastname)
                .HasMaxLength(100)
                .HasColumnName("lastname");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .HasColumnName("password");
            entity.Property(e => e.Username)
                .HasMaxLength(100)
                .HasColumnName("username");
        });

        modelBuilder.Entity<Logintime>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("logintime_pkey");

            entity.ToTable("logintime");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Lasttimestamp)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("lasttimestamp");
            entity.Property(e => e.Status)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("status");
            entity.Property(e => e.Userid)
                .HasMaxLength(100)
                .IsFixedLength()
                .HasColumnName("userid");
        });

        modelBuilder.Entity<Userstatus>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("userstatus_pkey");

            entity.ToTable("userstatus");

            entity.Property(e => e.Id)
                .HasDefaultValueSql("nextval('logintime_id_seq'::regclass)")
                .HasColumnName("id");
            entity.Property(e => e.Endtime)
                .HasMaxLength(100)
                .HasColumnName("endtime");
            entity.Property(e => e.Starttime)
                .HasMaxLength(100)
                .HasColumnName("starttime");
            entity.Property(e => e.Status)
                .HasMaxLength(100)
                .HasColumnName("status");
            entity.Property(e => e.Username)
                .HasMaxLength(100)
                .HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
