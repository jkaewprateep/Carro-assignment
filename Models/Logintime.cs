using System;
using System.Collections.Generic;

namespace Carro_assignment.Models;

public partial class Logintime
{
    public int Id { get; set; }

    public string? Userid { get; set; }

    public string? Status { get; set; }

    public string? Lasttimestamp { get; set; }
}
