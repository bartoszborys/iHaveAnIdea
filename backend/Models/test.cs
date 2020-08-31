using Microsoft.EntityFrameworkCore;

public class TestItem
{
    public long Id { get; set; }
    public string Name { get; set; }
    public bool IsComplete { get; set; }
}

public class TestContext : DbContext
{
    public TestContext(DbContextOptions<TestContext> options): base(options) { }
    public DbSet<TestItem> Book { get; set; }
}