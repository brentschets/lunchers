﻿using Lunchers.Models.Domain;
using System;
using System.Collections.Generic;

namespace Lunchers.Models.Repositories
{
    public interface IHandelaarRepository
    {
        IEnumerable<Handelaar> GetAll();
        Handelaar GetById(int id);
    }
}
 