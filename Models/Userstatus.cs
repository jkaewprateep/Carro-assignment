using System;
using System.Collections.Generic;

namespace Carro_assignment.Models;

public partial class Userstatus
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public string Status { get; set; } = null!;

    public string Starttime { get; set; } = null!;

    public string Endtime { get; set; } = null!;
}
