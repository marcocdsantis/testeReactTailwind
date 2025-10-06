using desafioPraticoCrudSimples.Models.Users;

namespace desafioPraticoCrudSimples.Services.Users;

public sealed class UserService
{
    private static readonly List<UserListItemModel> _users = new()
    {
        new UserListItemModel { Name = "Alice", Email = "alice@email.com" },
        new UserListItemModel { Name = "Bob", Email = "bob@email.com" }
    };

    public IEnumerable<UserListItemModel> GetAll() => _users;

    public UserListItemModel Add(UserListItemModel user)
    {
        user.Id = Guid.NewGuid();
        _users.Add(user);
        return user;
    }

    public bool Delete(Guid id)
    {
        var user = _users.FirstOrDefault(u => u.Id == id);
        if (user is null) return false;
        _users.Remove(user);
        return true;
    }
}