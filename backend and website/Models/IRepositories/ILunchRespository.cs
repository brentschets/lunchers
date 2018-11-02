﻿using Lunchers.Models.Domain;
using System;
using System.Collections.Generic;

namespace Lunchers.Models.Repositories
{
    public interface ILunchRespository
    {
        IEnumerable<Lunch> GetAll();
        Lunch getById(int id);
    }
}
 